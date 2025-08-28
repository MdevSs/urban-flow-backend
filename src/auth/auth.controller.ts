import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-dto';
import { CreateUsersDto } from 'src/users/dto/create-users.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const token = await this.authService.validateUser(dto.email, dto.password_hash);
    // return this.authService.login(user);
    return token
  }
  
  @Post('register')
  async register(@Body() dto: CreateUsersDto) {
    return this.authService.register(dto);
  }
}