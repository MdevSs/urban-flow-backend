import { PrismaService } from './common/db/prisma.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';

@Module({
  imports: [ UsersModule, AuthModule ],
  providers: [PrismaService],
  controllers: [UsersController]
})
export class AppModule {}
