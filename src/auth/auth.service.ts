// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUsersDto } from 'src/users/dto/create-users.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwt: JwtService) {}

  async validateUser(email: string, pass: string): Promise<{acces_token: string}> {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid Credentials');
    const ok = await this.usersService.validatePassword(user, pass);
    if (!ok) throw new UnauthorizedException("Invalid Credentials");
    // remove sensitive fields before returning
    const payload = { sub: user.id, email: user.email };
    console.log(payload)
    return {
      acces_token: await this.jwt.signAsync(payload),
    };
  }

  // async login(token: {acces_token: string}) {
  //   console.log("login jwt: "+ user)
  //   const payload = { sub: user.id, email: user.email};
  //   return { email: payload.email, access_token: this.jwt.sign(payload) };
  // }

  // src/auth/auth.service.ts
  async register(dto: CreateUsersDto ) {
    // 1. Verificar se já existe
    const existingUser = await this.usersService.findByEmail(dto.email);
    if (existingUser) {
        throw new UnauthorizedException('E-mail já cadastrado');
    }

    
    // // 2. Criar usuário
    // const newUser = await this.usersService.create(dto);

    // // 3. Gerar token
    // const payload = { sub: newUser.id, email: newUser.email, role: newUser.role };
    // return { access_token: this.jwt.sign(payload) };
  }
}