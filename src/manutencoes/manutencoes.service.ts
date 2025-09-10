import { Injectable } from '@nestjs/common';
import { CreateManutencoesDto, UpdateManutencoesDto } from './dto/create-manutencoes.dto'
import { PrismaService } from 'src/common/db/prisma.service';


@Injectable()
export class ManutencoesService {
  constructor(private prisma: PrismaService) { }

  create(dto: CreateManutencoesDto) {
    return this.prisma.manutencoes.create({
      data: dto
    })
  }

  findAll() {
    return this.prisma.manutencoes.findMany();
  }

  findOne(id: number) {
    return this.prisma.manutencoes.findUnique({
      where: { id_manutencao: id }
    });
  }

  update(id: number, dto: UpdateManutencoesDto) {
    return this.prisma.manutencoes.update({
      where: { id_manutencao: id },
      data: dto
    })
  }

  remove(id: number) {
    return this.prisma.manutencoes.delete({
      where: { id_manutencao: id }
    })
  }
}
