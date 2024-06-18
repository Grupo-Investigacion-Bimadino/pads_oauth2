import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { providerSchema } from './Schemas/provider';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'provider', schema: providerSchema }]),
  ],
  controllers: [ProviderController],
  providers: [ProviderService],
})
export class ProviderModule {}
