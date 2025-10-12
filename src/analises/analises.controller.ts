import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnalisesService } from './analises.service';
import { CreateAnaliseDto, UpdateAnaliseDto } from './dto/create-analise.dto';

@Controller('analises')
export class AnalisesController {
  constructor(private readonly analisesService: AnalisesService) {}

  @Post()
  create(@Body() createAnaliseDto: CreateAnaliseDto) {
    return this.analisesService.create(createAnaliseDto);
  }

  @Get()
  findAll() {
    return this.analisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.analisesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnaliseDto: UpdateAnaliseDto) {
    return this.analisesService.update(+id, updateAnaliseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.analisesService.remove(+id);
  }
}
