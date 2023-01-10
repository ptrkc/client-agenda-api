import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserDto) {
    const user = await this.prisma.user.create({
      data,
    });
    return { user };
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return { user };
  }

  async update(id: string, data: UpdateUserDto) {
    const user = await this.prisma.user.update({
      where: { id },
      data,
    });
    return { user };
  }

  async remove(id: string) {
    const user = await this.prisma.user.delete({
      where: { id },
    });
    return { user };
  }
}
