// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { UsuarioModule } from '../usuario/usuario.module';
import { PrismaService } from 'src/common/db/prisma.service';
import * as nodemailer from "nodemailer";
import { TwoFAService } from './2fa.service';
import { JwtModule } from '@nestjs/jwt';
import { TwoFAController } from './2fa.controller';

@Module({
  imports: [
    UsuarioModule,
    JwtModule
  ],
  providers: [TwoFAService],
  controllers: [TwoFAController],
  exports: [],
})
export class TwoFAModule {}