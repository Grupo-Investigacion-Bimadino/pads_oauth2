import { Injectable } from '@nestjs/common';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { tokens } from './schemas/tokens';

@Injectable()
export class TokensService {

  constructor(@InjectModel(tokens.name) private tokensModel: Model<tokens>) {}

  async create(createTokensDto: CreateTokenDto) {
    const createdTokens = new this.tokensModel(createTokensDto);
    return createdTokens.save();
  }

  findAll() {
    return this.tokensModel.find().exec();
  
      
  }

  findOne(id: string) {
    return this.tokensModel.findById(id).exec();
  }

  update(id: string, updateTokensDto: UpdateTokenDto) {
    return this.tokensModel
      .findByIdAndUpdate(id, updateTokensDto, {
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.tokensModel.findByIdAndDelete(id).exec();
  }
}