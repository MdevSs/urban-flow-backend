import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
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
    return await this.prisma.usuario.findUnique(
      {
        omit: {
        password: true,
        telefone: true,
        tipo_usuario: true,
        data_cadastro: true,
        ativo: true,
      },
      where: { email } 
    });
  }

  async findById(id: string) {
    return await this.prisma.usuario.findUnique({
      where: { id } 
      });
  }

  async validatePassword(email: string ,pass: string) {
    const user = await this.prisma.usuario.findUnique({
      where: { email } 
    });
    if (!user) throw new UnauthorizedException('Invalid Credentials');
    const ok = await bcrypt.compare(pass, user.password);
    return {user, ok}
  }
}