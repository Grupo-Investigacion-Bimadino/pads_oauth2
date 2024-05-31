import { Injectable } from '@nestjs/common';
import { CreateLogoDto } from './dto/create-logo.dto';
import { UpdateLogoDto } from './dto/update-logo.dto';

@Injectable()
export class LogosService {
  create(createLogoDto: CreateLogoDto) {
    return createLogoDto;
  }

  findAll() {
    return [

      {
        id: 1,
        url_logo: "google.com",
        format: "jpg",
        id_logos: 23
      },
      {
        id: 2,
        url_logo: "facebook.com",
        format: "png",
        id_logos: 10
      }
    ];
  }

  findOne(id: number) {
    return {
      id,
      url_logo: "google.com",
      format: "jpg",
      id_logos: 23
    }
  }

  update(id: number, updateLogoDto: UpdateLogoDto) {
    return {
      id,
      updateLogoDto
    };
  }

  remove(id: number) {
    return {
      id,
    };
  }
}
