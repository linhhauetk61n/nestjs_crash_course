import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { QuizService } from '../quiz/quiz.service';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService, QuizService],
})
export class QuestionModule {}
