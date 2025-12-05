// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUsuarioDto } from 'src/usuario/dto/usuario.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsuarioService, private jwt: JwtService) {}

  async validateUser(email: string, pass: string): Promise<{acces_token: string}> {
    const {user, ok} = await this.usersService.validatePassword(email, pass);
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
  async register(dto: CreateUsuarioDto ) {
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