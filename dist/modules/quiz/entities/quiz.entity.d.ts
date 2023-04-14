import { AbstractEntity, Collection } from '../../../common/base.entity';
import { QuestionEntity } from '../../../modules/question/entities/question.entity';
export declare class QuizEntity extends AbstractEntity {
    id: string;
    title: string;
    description: string;
    isActive: boolean;
    questions: QuestionEntity[];
}
export declare class QuizCollection extends Collection<QuizEntity> {
    data: QuizEntity[];
}
