import { Test, TestingModule } from '@nestjs/testing';
import { AnalisesService } from './analises.service';

describe('AnalisesService', () => {
  let service: AnalisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalisesService],
    }).compile();

    service = module.get<AnalisesService>(AnalisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
