import { Module } from '@nestjs/common';
import { SemaforoConfigService } from './semaforo-config.service';
import { SemaforoConfigController } from './semaforo-config.controller';
import { DBModule } from 'src/common/db/db.module';

@Module({
  imports: [DBModule],
  controllers: [SemaforoConfigController],
  providers: [SemaforoConfigService],
})
export class SemaforoConfigModule {}
