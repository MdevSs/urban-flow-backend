// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { PrismaService } from 'src/common/db/prisma.service';
import * as nodemailer from "nodemailer";
import { TwoFAService } from './2fa.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    JwtModule
  ],
  providers: [TwoFAService],
  controllers: [],
  exports: [],
})
export class AuthModule {}