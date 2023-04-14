import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UserRole } from 'src/common/enum';
import { UserService } from '../user/user.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    console.log(request);
    if (request?.user) {
      const { userId } = request.user;
      const user = await this.userService.getUserById(userId);

      return user.role === UserRole.ADMIN;
    }
    return false;
  }
}
