import { Injectable } from '@nestjs/common';
import { CreateNotificacoesDto, UpdateNotificacoesDto } from './dto/create-notificacoes.dto';
import { PrismaService } from 'src/common/db/prisma.service';

@Injectable()
export class NotificacoesService {
  constructor(private prisma: PrismaService) {}
  
  create(dto: CreateNotificacoesDto) {
    
  }

  findAll() {
    return `This action returns all Notificacoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} Notificacoes`;
  }

  update(id: number, dto: UpdateNotificacoesDto) {
    return `This action updates a #${id} Notificacoes`;
  }

  remove(id: number) {
    return `This action removes a #${id} Notificacoes`;
  }
}
