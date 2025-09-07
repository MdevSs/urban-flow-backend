import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaService } from 'src/common/db/prisma.service';
import { DBModule } from 'src/common/db/db.module';

@Module({
  imports: [DBModule],
  // em Imports não se deve importar um serviço individual, 
  // e sim o módulo da qual ele fazer parte
  controllers: [UsuarioController], 
  providers: [UsuarioService, PrismaService],
  exports: [UsuarioService],
})
export class UsuarioModule {}