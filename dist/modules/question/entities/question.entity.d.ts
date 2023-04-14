import { AbstractEntity } from '../../../common/base.entity';
import { OptionEntity } from '../../option/entities/option.entity';
import { QuizEntity } from '../../quiz/entities/quiz.entity';
export declare class QuestionEntity extends AbstractEntity {
    id: string;
    question: string;
    quiz: QuizEntity;
    options: OptionEntity[];
}
