import { Test, TestingModule } from '@nestjs/testing';
import { logosService } from './logos.service';

describe('LogosService', () => {
  let service: logosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [logosService],
    }).compile();

    service = module.get<logosService>(logosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
