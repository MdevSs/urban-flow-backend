import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SemaforoService } from './semaforo.service';
import { CreateSemaforoDto, UpdateSemaforoDto } from './dto/semaforo.dto';

@Controller('semaforo')
export class SemaforoController {
  constructor(private readonly semaforoService: SemaforoService) {}

  @Post()
  create(@Body() createSemaforoDto: CreateSemaforoDto) {
    return this.semaforoService.create(createSemaforoDto);
  }

  @Get()
  findAll() {
    return this.semaforoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.semaforoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSemaforoDto: UpdateSemaforoDto) {
    return this.semaforoService.update(+id, updateSemaforoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.semaforoService.remove(+id);
  }
}
