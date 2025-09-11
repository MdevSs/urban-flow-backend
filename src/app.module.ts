import { PrismaService } from './common/db/prisma.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario/usuario.controller';
import { TwoFAModule } from './2FA/2fa.module';
import { SemaforoModule } from './semaforo/semaforo.module';
import { NotificacoesModule } from './notificacoes/notificacoes.module';
import { ManutencoesModule } from './manutencoes/manutencoes.module';
import { SemaforoConfigModule } from './semaforo-config/semaforo-config.module';
import { AnalisesModule } from './analises/analises.module';

@Module({
  imports: [ UsuarioModule, AuthModule, TwoFAModule, SemaforoModule, NotificacoesModule, ManutencoesModule, SemaforoConfigModule, AnalisesModule ],
  providers: [PrismaService],
  controllers: [UsuarioController]
})
export class AppModule {}
