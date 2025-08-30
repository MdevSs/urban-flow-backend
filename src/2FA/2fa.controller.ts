import { Controller, Post, Body, UnauthorizedException, UseGuards, Req, Request } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { TwoFAService } from './2fa.service';

@Controller('2fa')
export class TwoFAController {
    constructor(private readonly twoFAService: TwoFAService) {}

    @UseGuards(JwtAuthGuard)
    @Post('teste')
    async Teste(@Request() req) {
        // const user = req.sub;
    return this.twoFAService.sendEmail("leandrohenrique.denise@gmail.com", "Hello World!")
        // return { user: req.user }
    }

    @UseGuards(JwtAuthGuard)
    @Post('request')
    async requestCode(@Req() req) {
        const userId = req.user.userId; // vem do JWT
        const code = this.twoFAService.createCode(userId);
        // aqui chamaria EmailService para enviar

        return this.twoFAService.sendEmail("leandrohenrique.denise@gmail.com", code)
    }

    @UseGuards(JwtAuthGuard)
    @Post('verify')
    async verifyCode(@Req() req, @Body('code') code: string) {
        const userId = req.user.userId;
        const valid = this.twoFAService.verifyCode(userId, code);
        return { success: valid };
    }
}