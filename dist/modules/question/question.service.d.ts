import { DataSource } from 'typeorm';
import { QuizEntity } from '../quiz/entities/quiz.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuestionEntity } from './entities/question.entity';
export declare class QuestionService {
    private dataSource;
    constructor(dataSource: DataSource);
    questionRepo: import("typeorm").Repository<QuestionEntity>;
    createQuestion(createQuestionDto: CreateQuestionDto, quiz: QuizEntity): Promise<{
        question: string;
        quiz: QuizEntity;
    } & QuestionEntity>;
    findAll(): Promise<QuestionEntity[]>;
    findQuestionById(id: string): Promise<QuestionEntity>;
    update(id: number, updateQuestionDto: UpdateQuestionDto): string;
    remove(id: number): string;
}
