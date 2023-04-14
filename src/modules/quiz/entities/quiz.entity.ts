import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity, Collection } from '../../../common/base.entity';
import { QuestionEntity } from '../../../modules/question/entities/question.entity';
@Entity('quizzes')
export class QuizEntity extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @OneToMany(() => QuestionEntity, (question) => question.quiz)
  questions: QuestionEntity[];
}

export class QuizCollection extends Collection<QuizEntity> {
  @Expose()
  @Type(() => QuizEntity)
  @ApiProperty({ type: () => QuizEntity, isArray: true })
  data: QuizEntity[];
}
