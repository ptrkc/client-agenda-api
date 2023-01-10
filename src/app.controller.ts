import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('users')
  async getUsers() {
    return await this.prisma.user.findMany();
  }

  @Post('user')
  async createUser(@Body() body: CreateUserDto) {
    const data = body;
    const user = await this.prisma.user.create({
      data,
    });
    return { user };
  }
}
