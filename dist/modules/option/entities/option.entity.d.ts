import { AbstractEntity } from '../../../common/base.entity';
import { QuestionEntity } from '../../question/entities/question.entity';
export declare class OptionEntity extends AbstractEntity {
    id: string;
    text: string;
    isCorrect: boolean;
    question: QuestionEntity;
}
