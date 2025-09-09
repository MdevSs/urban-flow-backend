import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificacoesService } from './notificacoes.service';
import { CreateNotificacoesDto, UpdateNotificacoesDto } from './dto/create-notificacoes.dto';

@Controller('notificacoes')
export class NotificacoesController {
  constructor(private readonly notificacoesService: NotificacoesService) {}

  @Post()
  create(@Body() createNotificacoeDto: CreateNotificacoesDto) {
    return this.notificacoesService.create(createNotificacoeDto);
  }

  @Get()
  findAll() {
    return this.notificacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificacoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotificacoeDto: UpdateNotificacoesDto) {
    return this.notificacoesService.update(+id, updateNotificacoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificacoesService.remove(+id);
  }
}
