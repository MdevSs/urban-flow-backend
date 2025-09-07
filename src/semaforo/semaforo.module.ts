import { Module } from '@nestjs/common';
import { SemaforoService } from './semaforo.service';
import { SemaforoController } from './semaforo.controller';
import { DBModule } from 'src/common/db/db.module';

@Module({
  imports: [DBModule],
  controllers: [SemaforoController],
  providers: [SemaforoService],
})
export class SemaforoModule {}
