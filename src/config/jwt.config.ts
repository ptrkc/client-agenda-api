import { JwtModuleAsyncOptions } from '@nestjs/jwt';

export const jwtSecret = process.env.JWT_SECRET;

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: () => {
    return {
      secret: jwtSecret,
      signOptions: { expiresIn: '7d' },
    };
  },
};
