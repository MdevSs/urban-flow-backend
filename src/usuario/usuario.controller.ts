import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from "./dto/usuario.dto"

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get('')
  async debugg() {
    return "Debbugg"
  }

  @Post('create')
  // @UseGuards(AdminCreateGuard)
  async create (@Body() dto: CreateUsuarioDto) {
    return this.usuarioService.create(dto);
  }

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: string) {
    return this.usuarioService.findById(id);
  }
}