import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SemaforoConfigService } from './semaforo-config.service';
import { CreateSemaforoConfigDto, UpdateSemaforoConfigDto } from './dto/create-semaforo-config.dto';


@Controller('semaforo-config')
export class SemaforoConfigController {
  constructor(private readonly semaforoConfigService: SemaforoConfigService) {}

  @Post()
  create(@Body() dto: CreateSemaforoConfigDto) {
    return this.semaforoConfigService.create(dto);
  }

  @Get()
  findAll() {
    return this.semaforoConfigService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.semaforoConfigService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSemaforoConfigDto) {
    return this.semaforoConfigService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.semaforoConfigService.remove(+id);
  }
}
