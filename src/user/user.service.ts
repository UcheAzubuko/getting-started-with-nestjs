import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDto } from './dto/user-update.dto';

@Injectable()
export class UserService {
  get() {
    return { name: 'Uchechukwu Azubuko', country: 'Nigeria' };
  }
  getUser(userId: number) {
    return { userId };
  }
  create(req: Request) {
    return req.body;
  }
  update(updateUserDto: UpdateUserDto, userId: number) {
    return { body: updateUserDto, userId };
  }
  delete(userId: number) {
    return { userId };
  }
}
