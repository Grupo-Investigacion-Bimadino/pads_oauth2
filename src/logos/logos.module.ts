import { Module } from '@nestjs/common';
import { logosService } from './logos.service';
import { LogosController } from './logos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { logosSchema } from './Schemas/logos';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'logos', schema: logosSchema }]),
  ],
  controllers: [LogosController],
  providers: [logosService],
})
export class logosModule {}
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogosService } from './logos.service';
import { CreateLogosDto } from './dto/create-logos.dto';
import { UpdateLogosDto } from './dto/update-logos.dto';

@Controller('logos')
export class LogosController {
  constructor(private readonly logosService: LogosService) {}

  @Post()
  create(@Body() createLogosDto: CreateLogosDto) {
    return this.logosService.create(createLogosDto);
  }

  @Get()
  findAll() {
    return this.logosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLogosDto: UpdateLogosDto) {
    return this.logosService.update(+id, updateLogosDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logosService.remove(+id);
  }
}
