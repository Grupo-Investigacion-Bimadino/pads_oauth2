import { Test, TestingModule } from '@nestjs/testing';
import { ProviderController } from './provider.controller';
import { providerService } from './provider.service';

describe('ProviderController', () => {
  let controller: ProviderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProviderController],
      providers: [providerService],
    }).compile();

    controller = module.get<ProviderController>(ProviderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
