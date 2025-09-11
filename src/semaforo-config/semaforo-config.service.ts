import { Injectable } from '@nestjs/common';
import { CreateSemaforoConfigDto, UpdateSemaforoConfigDto } from './dto/create-semaforo-config.dto';
import { PrismaService } from 'src/common/db/prisma.service';


@Injectable()
export class SemaforoConfigService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateSemaforoConfigDto) {
    return this.prisma.configuracoes_semaforo.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.configuracoes_semaforo.findMany();
  }

  findOne(id: number) {
    return this.prisma.configuracoes_semaforo.findUnique({
      where: { id_config: id }
    })
  }

  update(id: number, dto: UpdateSemaforoConfigDto) {
    return this.prisma.configuracoes_semaforo.update({
      where: { id_config: id },
      data: dto
    })
  }

  remove(id: number) {
    return this.prisma.configuracoes_semaforo.delete({
      where: { id_config: id }
    });
  }
}
