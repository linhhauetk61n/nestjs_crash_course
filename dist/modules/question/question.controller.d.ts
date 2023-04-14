import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuizService } from '../quiz/quiz.service';
export declare class QuestionController {
    private readonly questionService;
    private readonly quizService;
    constructor(questionService: QuestionService, quizService: QuizService);
    create(createQuestionDto: CreateQuestionDto): Promise<{
        question: string;
        quiz: import("../quiz/entities/quiz.entity").QuizEntity;
    } & import("./entities/question.entity").QuestionEntity>;
    findAll(): Promise<import("./entities/question.entity").QuestionEntity[]>;
    findOne(id: string): Promise<import("./entities/question.entity").QuestionEntity>;
    update(id: string, updateQuestionDto: UpdateQuestionDto): string;
    remove(id: string): string;
}
