import { Test, TestingModule } from '@nestjs/testing';
import { SemaforoController } from './semaforo.controller';
import { SemaforoService } from './semaforo.service';

describe('SemaforoController', () => {
  let controller: SemaforoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SemaforoController],
      providers: [SemaforoService],
    }).compile();

    controller = module.get<SemaforoController>(SemaforoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
