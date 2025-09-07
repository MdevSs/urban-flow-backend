import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto, ResponseUsuarioDto } from './dto/usuario.dto';
import { PrismaService } from 'src/common/db/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUsuarioDto) {
    const { nome, email, password, telefone, data_cadastro, tipo_usuario, ativo } = dto
    const userWithSameEmail = await this.prisma.usuario.findUnique({
      where: { email },
    })

    if(userWithSameEmail)
      throw new ConflictException('usuario with same email already exists')

    const hashed = await bcrypt.hash(password, 6);
    dto.password = hashed;
    try
    {
      const user = await this.prisma.usuario.create({
        data: dto
      });
      return {
        user,
      }
    }catch(e){
      throw new Error(e);
    }
  }
  
  async findByEmail(email: string) {
    return await this.prisma.usuario.findUnique({ where: { email } });
  }

  async findById(id: string) {
    return await this.prisma.usuario.findUnique({ where: { id } });
  }

  async validatePassword(user: {
    nome: string;
    email: string;
    password: string;
    telefone: string | null;
    tipo_usuario: string | null;
    data_cadastro: Date | null;
    ativo: boolean | null;
    id: string;
  }, pass: string) {
    return await bcrypt.compare(pass, user.password);
  }
}