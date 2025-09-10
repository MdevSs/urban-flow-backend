import { Injectable } from '@nestjs/common';
import { CreateNotificacoesDto, UpdateNotificacoesDto } from './dto/create-notificacoes.dto';
import { PrismaService } from 'src/common/db/prisma.service';

@Injectable()
export class NotificacoesService {
  constructor(private prisma: PrismaService) {}
  
  create(dto: CreateNotificacoesDto) {
    return this.prisma.notificacoes.create({
      data: dto
    })
  }
  
  findAll() {
    return this.prisma.notificacoes.findMany();
  }

  findOne(id: number) {
    return this.prisma.notificacoes.findUnique({
      where: { id_notificacao: id }
    })
  }

  update(id: number, dto: UpdateNotificacoesDto) {
    return this.prisma.notificacoes.update({
      where: { id_notificacao: id },
      data: dto 
    });
  }

  remove(id: number) {
    return this.prisma.notificacoes.delete({
      where: { id_notificacao: id }
    })
  }
}
