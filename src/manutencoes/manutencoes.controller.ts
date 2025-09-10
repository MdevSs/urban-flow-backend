import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManutencoesService } from './manutencoes.service';
import { CreateManutencoesDto, UpdateManutencoesDto } from './dto/create-manutencoes.dto';


@Controller('manutencoes')
export class ManutencoesController {
  constructor(private readonly manutencoesService: ManutencoesService) {}

  @Post()
  create(@Body() createManutencoesDto: CreateManutencoesDto) {
    return this.manutencoesService.create(createManutencoesDto);
  }

  @Get()
  findAll() {
    return this.manutencoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.manutencoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateManutencoesDto: UpdateManutencoesDto) {
    return this.manutencoesService.update(+id, updateManutencoesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.manutencoesService.remove(+id);
  }
}
