import { AbstractEntity } from '../../../common/base.entity';
import { OptionEntity } from '../../option/entities/option.entity';
import { QuizEntity } from '../../quiz/entities/quiz.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('questions')
export class QuestionEntity extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  question: string;

  @ManyToOne(() => QuizEntity, (quiz) => quiz.questions)
  quiz: QuizEntity;

  @OneToMany(() => OptionEntity, (option) => option.question)
  options: OptionEntity[];
}
