import { Test, TestingModule } from '@nestjs/testing';
import { AnalisesController } from './analises.controller';
import { AnalisesService } from './analises.service';

describe('AnalisesController', () => {
  let controller: AnalisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalisesController],
      providers: [AnalisesService],
    }).compile();

    controller = module.get<AnalisesController>(AnalisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
