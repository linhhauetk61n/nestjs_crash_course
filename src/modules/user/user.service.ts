import { BadRequestException, Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectDataSource } from '@nestjs/typeorm';
import { event } from 'src/common/constants/event.constant';
import { DataSource } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectDataSource() private dataSource: DataSource) {}

  userRepository = this.dataSource.getRepository(UserEntity);

  async register(createUserDto: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (existingUser)
      throw new BadRequestException(
        `Email: ${createUserDto.email} is already exist!`,
      );
    const user = this.userRepository.create();
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return await this.userRepository.save(user);
  }

  async getUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async getUserById(id: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({ where: { id } });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  @OnEvent(event.RESPONSE_SUBMITTED)
  handleIfResponseIsCorrect1(payload) {
    console.log('USER_SERVICE', payload);
  }
}
