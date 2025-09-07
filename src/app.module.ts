import { PrismaService } from './common/db/prisma.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario/usuario.controller';
import { TwoFAModule } from './2FA/2fa.module';
import { SemaforoModule } from './semaforo/semaforo.module';

@Module({
  imports: [ UsuarioModule, AuthModule, TwoFAModule, SemaforoModule ],
  providers: [PrismaService],
  controllers: [UsuarioController]
})
export class AppModule {}
