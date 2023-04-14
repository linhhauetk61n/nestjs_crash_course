import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

@Module({
  controllers: [QuizController],
  providers: [QuizService],
  imports: [UserModule],
})
export class QuizModule {}
