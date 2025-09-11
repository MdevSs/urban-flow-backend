import { Injectable } from '@nestjs/common';
import { CreateAnaliseDto } from './dto/create-analise.dto';
import { UpdateAnaliseDto } from './dto/update-analise.dto';
import { PrismaService } from 'src/common/db/prisma.service';

@Injectable()
export class AnalisesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateAnaliseDto) {
    return this.prisma.analytics.create({
      data: dto
    });
  }

  findAll() {
    return this.prisma.analytics.findMany();
  }

  findOne(id: number) {
    return this.prisma.analytics.findUnique({
      where: { id_analytics: id }
    });
  }

  update(id: number, dto: UpdateAnaliseDto) {
    return this.prisma.analytics.update({
      where: { id_analytics: id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.analytics.delete({
      where: { id_analytics: id }
    });
  }
}
