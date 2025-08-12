import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/common/db/prisma.service';
import { DBModule } from 'src/common/db/db.module';

@Module({
  imports: [DBModule],
  // em Imports não se deve importar um serviço individual, 
  // e sim o módulo da qual ele fazer parte
  controllers: [UsersController], 
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}