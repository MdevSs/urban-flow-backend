import { Module } from '@nestjs/common';
import { AnalisesService } from './analises.service';
import { AnalisesController } from './analises.controller';
import { DBModule } from 'src/common/db/db.module';

@Module({
  imports: [DBModule],
  controllers: [AnalisesController],
  providers: [AnalisesService],
})
export class AnalisesModule {}
