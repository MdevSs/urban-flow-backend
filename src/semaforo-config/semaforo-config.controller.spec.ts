import { Test, TestingModule } from '@nestjs/testing';
import { SemaforoConfigController } from './semaforo-config.controller';
import { SemaforoConfigService } from './semaforo-config.service';

describe('SemaforoConfigController', () => {
  let controller: SemaforoConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SemaforoConfigController],
      providers: [SemaforoConfigService],
    }).compile();

    controller = module.get<SemaforoConfigController>(SemaforoConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
