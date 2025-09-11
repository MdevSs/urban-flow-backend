import { Test, TestingModule } from '@nestjs/testing';
import { SemaforoConfigService } from './semaforo-config.service';

describe('SemaforoConfigService', () => {
  let service: SemaforoConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SemaforoConfigService],
    }).compile();

    service = module.get<SemaforoConfigService>(SemaforoConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
