import { Injectable } from '@nestjs/common';
import { CreateHistoricoDto, UpdateHistoricoDto } from './dto/create-historico.dto';
import { PrismaService } from 'src/common/db/prisma.service';

@Injectable()
export class HistoricoService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateHistoricoDto) {
    return this.prisma.historico_status.create({
      data: dto
    });
  }

  findAll() {
    return this.prisma.historico_status.findMany();
  }

  findOne(id: number) {
    return this.prisma.historico_status.findUnique({
      where: { id_historico: id }
    });
  }

  update(id: number, dto: UpdateHistoricoDto) {
    return this.prisma.historico_status.update({
      where: { id_historico: id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.historico_status.delete({
      where: { id_historico: id }
    });
  }
}
