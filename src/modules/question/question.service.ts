import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { QuizEntity } from '../quiz/entities/quiz.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuestionEntity } from './entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(@InjectDataSource() private dataSource: DataSource) {}

  questionRepo = this.dataSource.getRepository(QuestionEntity);

  async createQuestion(createQuestionDto: CreateQuestionDto, quiz: QuizEntity) {
    return await this.dataSource
      .getRepository(QuestionEntity)
      .save({ question: createQuestionDto.question, quiz: quiz });
  }

  async findAll() {
    return await this.questionRepo.find({ relations: ['quiz', 'options'] });
  }

  async findQuestionById(id: string) {
    return await this.questionRepo.findOne({
      where: { id },
      relations: ['quiz', 'options'],
    });
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
