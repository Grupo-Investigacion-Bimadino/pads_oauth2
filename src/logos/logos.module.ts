import { Module } from '@nestjs/common';
import { logosService } from './logos.service';
import { logosController } from './logos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { logosSchema } from './Schemas/logos';



@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'logos', schema: logosSchema }]),
  ],
  controllers: [logosController],
  providers: [logosService],
})
export class logosModule {}
