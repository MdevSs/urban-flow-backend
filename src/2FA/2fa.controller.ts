import { Controller, Post, Body, UnauthorizedException, UseGuards, Req } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { TwoFAService } from './2fa.service';

@Controller('2fa')
export class AuthController {
    constructor(private readonly twoFAService: TwoFAService) {}

    @UseGuards(JwtAuthGuard)
    @Post('request')
    async requestCode(@Req() req) {
        const userId = req.user.userId; // vem do JWT
        const code = this.twoFAService.createCode(userId);
        // aqui chamaria EmailService para enviar
        return { message: 'Código enviado por e-mail (simulado)' };
    }

    @UseGuards(JwtAuthGuard)
    @Post('verify')
    async verifyCode(@Req() req, @Body('code') code: string) {
        const userId = req.user.userId;
        const valid = this.twoFAService.verifyCode(userId, code);
        return { success: valid };
    }
}