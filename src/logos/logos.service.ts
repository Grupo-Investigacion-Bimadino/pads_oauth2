import { Injectable } from '@nestjs/common';
import { CreateLogoDto } from './dto/create-logo.dto';
import { UpdateLogoDto } from './dto/update-logo.dto';
import { logos } from './Schemas/logos';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class logosService {

  constructor(@InjectModel(logos.name) private logosModel: Model<logos>) {}

  async create(CreateLogoDto: CreateLogoDto) {
    const createdTokens = new this.logosModel(CreateLogoDto);
    return createdTokens.save();
  }

  findAll() {
    return this.logosModel.find().exec();
  
      
  }

  findOne(id: string) {
    return this.logosModel.findById(id).exec();
  }

  update(id: string, updateTokensDto: UpdateLogoDto) {
    return this.logosModel
      .findByIdAndUpdate(id, updateTokensDto, {
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.logosModel.findByIdAndDelete(id).exec();
  }
}