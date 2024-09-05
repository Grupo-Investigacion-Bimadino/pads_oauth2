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
import { CreatelogosDto } from './dto/create-logos.dto';
import { UpdatelogosDto } from './dto/update-logos.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { logos } from './schemas/logos';
@Injectable()
export class logosService {
  constructor(@InjectModel(logos.name) private logosModel: Model<logos>) {}

  async create(createlogosDto: CreatelogosDto) {
    const createdlogos = new this.logosModel(createlogosDto);
    return createdlogos.save();

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

  }
    findOne(id: string) {
      return this.logosModel.findById(id).exec();
    }
  
    update(id: string, updatelogosDto: UpdatelogosDto) {
      return this.logosModel
        .findByIdAndUpdate(id, updatelogosDto, {
          new: true,
        })
        .exec();
    }
  
    remove(id: string) {
      return this.logosModel.findByIdAndDelete(id).exec();
    }
  }
