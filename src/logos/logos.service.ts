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
        id: 23,
        url_logo: "google.com",
        format: "jpg",
        id_logos: 2
      },
      {
        id: 24,
        url_logo: "facebook.com",
        format : "png",
        id_logos: 10
      },
      {
        id: 30,
        url_logo: "x.com",
        format: "png",
        id_logos: 5
      }
    ];
  }

  findOne(id: number) {
    return {
      id,
      url_logo: "google.com",
      format: "jpg",
      id_logos: 3
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
