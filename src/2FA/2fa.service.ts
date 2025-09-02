
// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUsersDto } from 'src/users/dto/create-users.dto';
import * as nodemailer from "nodemailer";
import { randomInt } from 'crypto';

interface CodeEntry {
  code: string;
  expires: number;
}

@Injectable()
export class TwoFAService {
  private transporter;
  private codes = new Map<string, CodeEntry>();
  
  constructor(private usersService: UsersService){
      this.transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: 'contato@urbanflowai.me',
        pass: process.env.ZOHO_KEY || "1Fpk4wnqtbWy",
      }});
  }
  

  createCode(userId: string): string {
    const code = this.generateCode();
    const expires = Date.now() + 5 * 60 * 1000; // 5 minutos
    this.codes.set(userId, { code, expires });
    return code;
  }

  verifyCode(userId: string, input: string): boolean {
    const record = this.codes.get(userId);
    if (!record) return false;
    if (Date.now() > record.expires) return false;
    if (input!=record.code) return false
    this.codes.delete(userId);

    return true;
  }

  generateCode(): string {
  return String(randomInt(100000, 999999)); // gera código de 6 dígitos
  } 

  async sendEmail(to: string, code){
    try{
        await this.transporter.sendMail({
        from: 'contato@urbanflowai.me',
        to,
        subject: '2FA Verification Code',
        text: `Your Code is ${code}`,
        html: `<p>Your Code is <strong>${code}</strong></p>`
        })
    }catch(e){
      console.error('Erro ao enviar email:', e);
      throw new UnauthorizedException('Falha ao enviar email')
    }
  }

}