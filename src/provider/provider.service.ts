import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { provider } from './schemas/provider';


@Injectable()
export class providerService {

  constructor(@InjectModel(provider.name) private providerModel: Model<provider>) {}

  async create(CreateProviderDto: CreateProviderDto) {
    const createdprovider = new this.providerModel(CreateProviderDto);
    return createdprovider.save();
  }

  findAll() {
    return this.providerModel.find().exec();
  
      
  }

  findOne(id: string) {
    return this.providerModel.findById(id).exec();
  }

  update(id: string, UpdateProviderDto: UpdateProviderDto) {
    return this.providerModel
      .findByIdAndUpdate(id, UpdateProviderDto, {
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.providerModel.findByIdAndDelete(id).exec();
  }
}
