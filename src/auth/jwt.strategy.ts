import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY || 'cd4bcece3be895b5f26f0cc4167bd4e4f394cdec265ab62b87783a5d9ce1e396',
    });
  }

  async validate(payload: any) {
    console.log(payload)
    return { userId: payload.sub, email: payload.email };
  }
}
