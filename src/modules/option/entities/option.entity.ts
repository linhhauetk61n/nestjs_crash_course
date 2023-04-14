import { AbstractEntity } from '../../../common/base.entity';
import { QuestionEntity } from '../../question/entities/question.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('options')
export class OptionEntity extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  text: string;

  @Column({ type: 'boolean' })
  isCorrect: boolean;

  @ManyToOne(() => QuestionEntity, (question) => question.options)
  question: QuestionEntity;
}
