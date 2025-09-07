import { Injectable } from '@nestjs/common';
import { CreateSemaforoDto, UpdateSemaforoDto } from './dto/semaforo.dto'
import { PrismaService } from 'src/common/db/prisma.service';

@Injectable()
export class SemaforoService {
  constructor(private prisma: PrismaService){}
  
  create(dto: CreateSemaforoDto) {
    const semaforo = this.prisma.semaforo.create({
      data: dto
    })

    return semaforo;
  }

  findAll() {
    return this.prisma.semaforo.findMany();
  }

  findOne(id: number) {
    return this.prisma.semaforo.findUnique({
      where: { id_semaforo: id }
    })
  }

  update(id: number, updateSemaforoDto: UpdateSemaforoDto) {
    return this.prisma.semaforo.update({
      where: { id_semaforo: id },
      data: updateSemaforoDto
    })
  }

  remove(id: number) {
    return this.prisma.semaforo.delete({
      where: { id_semaforo: id }
    })
  }
}
