import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateQuizDto {
  @ApiProperty({
    description: 'The title of the quiz',
    example: 'What is the best front-end platform in Javascript?',
  })
  @IsNotEmpty({ message: 'This quiz should have a title' })
  title: string;

  @ApiProperty({
    description: 'The description of the quiz',
    example: 'Example: React JS, React Native, ...',
  })
  @IsNotEmpty()
  description: string;
}
