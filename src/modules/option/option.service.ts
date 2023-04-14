import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { QuestionEntity } from '../question/entities/question.entity';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { OptionEntity } from './entities/option.entity';

@Injectable()
export class OptionService {
  constructor(@InjectDataSource() private dataSource: DataSource) {}

  optionRepository = this.dataSource.getRepository(OptionEntity);
  async createOption(
    createOptionDto: CreateOptionDto,
    question: QuestionEntity,
  ) {
    return await this.optionRepository.save({
      text: createOptionDto.text,
      isCorrect: createOptionDto.isCorrect,
      question: question,
    });
  }
  findAll() {
    return `This action returns all option`;
  }

  findOne(id: number) {
    return `This action returns a #${id} option`;
  }

  update(id: number, updateOptionDto: UpdateOptionDto) {
    return `This action updates a #${id} option`;
  }

  remove(id: number) {
    return `This action removes a #${id} option`;
  }
}
