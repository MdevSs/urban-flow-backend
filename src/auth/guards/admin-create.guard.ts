import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwt: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    // const token = request.headers['x-create-token'] || request.headers['X-Create-Token'];
    // const expected = process.env.ADMIN_CREATE_TOKEN;
    // if (!expected) throw new UnauthorizedException('Server create token not configured');
    // if (!token || token !== expected) throw new UnauthorizedException('Invalid create token');
    // return true;
    const token = this.extractTokenFromheader(request)
    if(!token){
      throw new UnauthorizedException()
    }
    try{
      const payload = await this.jwt.verifyAsync(
        token,
        {
          secret: process.env.SECRET_KEY
        }
      );
      request['user'] = payload;
    }catch(e){
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromheader(req: Request): string | undefined {
    const [type, token] = req.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : undefined;
  }
}