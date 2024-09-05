import { Test, TestingModule } from '@nestjs/testing';
import { LogosController } from './logos.controller';
import { logosService } from './logos.service';

describe('LogosController', () => {
  let controller: LogosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogosController],
      providers: [logosService],
    }).compile();

    controller = module.get<LogosController>(LogosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
