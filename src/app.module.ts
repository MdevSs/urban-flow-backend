import { PrismaService } from './common/db/prisma.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario/usuario.controller';
import { TwoFAModule } from './2FA/2fa.module';
import { SemaforoModule } from './semaforo/semaforo.module';
import { NotificacoesModule } from './notificacoes/notificacoes.module';
import { ManutencoesModule } from './manutencoes/manutencoes.module';
import { AnalisesModule } from './analises/analises.module';
import { HistoricoModule } from './historico_status/historico.module';

@Module({
  imports: [ UsuarioModule, AuthModule, TwoFAModule, SemaforoModule, NotificacoesModule, ManutencoesModule, AnalisesModule, HistoricoModule ],
  providers: [PrismaService],
  controllers: [UsuarioController]
})
export class AppModule {}
