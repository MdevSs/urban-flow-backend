import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-dto';
import { CreateUsuarioDto } from 'src/usuario/dto/usuario.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const token = await this.authService.validateUser(dto.email, dto.password);
    // return this.authService.login(user);
    return token
  }
  
  @Post('register')
  async register(@Body() dto: CreateUsuarioDto) {
    return this.authService.register(dto);
  }
}