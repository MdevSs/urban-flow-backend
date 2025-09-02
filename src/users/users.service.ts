import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUsersDto, ResponseUsersDto } from './dto/create-users.dto';
import { PrismaService } from 'src/common/db/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUsersDto) {
    const { name, email, telefone, data_cadastro, tipo_usuario, ativo, code } = dto
    const userWithSameEmail = await this.prisma.users.findUnique({
      where: { email },
    })

    if(userWithSameEmail)
      throw new ConflictException('users with same email already exists')

    const hashed = await bcrypt.hash(email, 6);

    try
    {
      const user = await this.prisma.users.create({
        data: {
          name,
          email,
          code: (hashed.slice(5)+"-"+hashed.slice(6,11)+"-"+hashed.slice(12,17)),
        },
      });
      return {
        user,
      }
    }catch(e){
      throw new Error(e);
    }
  }
  
  async findByEmail(email: string) {
    return await this.prisma.users.findUnique({ where: { email } });
  }

  async findById(id: string) {
    return await this.prisma.users.findUnique({ where: { id } });
  }

  async validatePassword(user: any, pass: string) {
    return await bcrypt.compare(pass, user.password_hash);
  }
}