import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'The Email of Account to login',
    example: 'Eg: example@gmail.com',
  })
  @IsNotEmpty()
  @Matches(RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}'), {
    message: 'Incorrect Email',
  })
  email: string;

  @ApiProperty({
    description:
      'The password of account, have at least 6 character and not greater than 20',
    example: 'missingpass',
  })
  @IsNotEmpty()
  @Length(6, 20)
  password: string;
}
