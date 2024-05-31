import { Injectable } from '@nestjs/common';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';

@Injectable()
export class TokensService {
  create(createTokenDto: CreateTokenDto) {
    return createTokenDto;
  }

  findAll() {
    return [
      {

        id: 1,
        token: 6655,
        duration: "05:00 minutes",
        Encrypted_algorithm: 123456,
        data: "nombre y apellido"

      },

      {
        id: 2,
        token: 12345,
        duration: "09:00 minutes",
        Encrypted_algorithm: 97654744,
        data: "edad y sexo"

      }

    ]
      
  }

  findOne(id: number) {
    return {

      id,
      token: 6655,
      duration: "05:00 minutes",
      Encrypted_algorithm: 123456,
      data: "nombre y apellido"

    };
  }

  update(id: number, updateTokenDto: UpdateTokenDto) {
    return {
      id,
      updateTokenDto,
    };
  }

  remove(id: number) {
    return {

      id,
    };
  }
}
