import { Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionController } from './option.controller';
import { QuestionService } from '../question/question.service';

@Module({
  controllers: [OptionController],
  providers: [OptionService, QuestionService],
})
export class OptionModule {}
