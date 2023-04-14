import { DataSource } from 'typeorm';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { SearchQuizQuery } from './dto/search-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { QuizCollection, QuizEntity } from './entities/quiz.entity';
export declare class QuizService {
    private dataSource;
    constructor(dataSource: DataSource);
    quizRepository: import("typeorm").Repository<QuizEntity>;
    create(createQuizDto: CreateQuizDto): Promise<CreateQuizDto & QuizEntity>;
    getAllQuiz(): Promise<QuizEntity[]>;
    findOne(id: string): Promise<QuizEntity>;
    searchQuiz({ searchText, isActive, orderBy, sortOrder, limit, offset, }: SearchQuizQuery): Promise<QuizCollection>;
    getQuizById(id: string): Promise<QuizEntity>;
    update(id: number, updateQuizDto: UpdateQuizDto): string;
    remove(id: number): string;
}
