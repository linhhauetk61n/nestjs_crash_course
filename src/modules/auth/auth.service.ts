import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserEntity } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserEntity | undefined> {
    const user = await this.userService.getUserByEmail(email);
    if (!user) throw new BadRequestException();
    if (!(await bcrypt.compare(password, user.password)))
      throw new UnauthorizedException();

    return user;
  }

  async generateToken(user: any) {
    return {
      accessToken: this.jwtService.sign({
        email: user.email,
        userId: user.id,
      }),
    };
  }
}
