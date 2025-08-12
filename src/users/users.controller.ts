import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from "./dto/create-users.dto"

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('')
  async debugg() {
    return "Debbugg"
  }

  @Post('create')
  // @UseGuards(AdminCreateGuard)
  async create (@Body() dto: CreateUsersDto) {
    return this.usersService.create(dto);
  }

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: string) {
    return this.usersService.findById(id);
  }
}