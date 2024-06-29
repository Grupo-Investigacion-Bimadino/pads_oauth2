import { Injectable } from '@nestjs/common';
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

