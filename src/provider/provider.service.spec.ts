import { Test, TestingModule } from '@nestjs/testing';
import { providerService } from './provider.service';

describe('ProviderService', () => {
  let service: providerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [providerService],
    }).compile();

    service = module.get<providerService>(providerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
