import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectDataSource } from '@nestjs/typeorm';
import { event } from 'src/common/constants/event.constant';
import { BooleanEnum } from 'src/common/enum';
import { Brackets, DataSource } from 'typeorm';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { SearchQuizQuery } from './dto/search-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { QuizCollection, QuizEntity } from './entities/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
  ) {}

  quizRepository = this.dataSource.getRepository(QuizEntity);

  async create(createQuizDto: CreateQuizDto) {
    return await this.dataSource.getRepository(QuizEntity).save(createQuizDto);
  }

  async getAllQuiz() {
    return await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      .leftJoinAndSelect('qt.options', 'o')
      .getMany();
  }

  async findOne(id: string) {
    return await this.dataSource
      .getRepository(QuizEntity)
      .findOne({ where: { id } });
  }

  async searchQuiz({
    searchText,
    isActive,
    orderBy,
    sortOrder,
    limit,
    offset,
  }: SearchQuizQuery): Promise<QuizCollection> {
    const query = await this.quizRepository

      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      .leftJoinAndSelect('qt.options', 'o');

    if (isActive) {
      query.andWhere('q.isActive = :active', {
        active: isActive === BooleanEnum.TRUE ? true : false,
      });
    }
    if (searchText) {
      query.andWhere(
        new Brackets((qb) => {
          qb.where('"title" ILIKE :searchText', {
            searchText: `%${searchText}%`,
          }),
            qb.orWhere('"description" ILIKE :searchText', {
              searchText: `%${searchText}%`,
            });
        }),
      );
    }
    if (orderBy && sortOrder) {
      query.orderBy(`q.${orderBy}`, sortOrder);
    } else {
      query.orderBy('q.createdAt', 'DESC');
    }

    const [data, total] = await query
      .skip(offset)
      .take(limit)
      .getManyAndCount();

    return {
      data: data,
      pageInfo: {
        total: total,
        offset: offset,
        limit: limit,
      },
    };
  }

  async getQuizById(id: string) {
    return await this.dataSource.getRepository(QuizEntity).findOne({
      where: { id },
      relations: ['questions', 'questions.options'],
    });
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return `This action updates a #${id} quiz`;
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
}
