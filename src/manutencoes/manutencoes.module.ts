import { Module } from '@nestjs/common';
import { ManutencoesService } from './manutencoes.service';
import { ManutencoesController } from './manutencoes.controller';
import { DBModule } from 'src/common/db/db.module';

@Module({
  imports: [DBModule],
  controllers: [ManutencoesController],
  providers: [ManutencoesService],
})
export class ManutencoesModule {}
