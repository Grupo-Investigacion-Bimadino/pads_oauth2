import { Module } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { TokensController } from './tokens.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { tokensSchema } from './Schemas/tokens';



@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'tokens', schema: tokensSchema }]),
  ],
  controllers: [TokensController],
  providers: [TokensService],
})
export class TokensModule {}
