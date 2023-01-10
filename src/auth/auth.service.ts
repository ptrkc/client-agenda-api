import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user) return null;

    const match = await compare(password, user.passwordHash);
    if (match) {
      const { passwordHash, ...userWithoutPassHash } = user;
      return userWithoutPassHash;
    }
    return null;
  }
}
