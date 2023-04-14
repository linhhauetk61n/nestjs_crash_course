import { CreateQuizDto } from './dto/create-quiz.dto';
import { SearchQuizQuery } from './dto/search-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { QuizCollection } from './entities/quiz.entity';
import { QuizService } from './quiz.service';
export declare class QuizController {
    private readonly quizService;
    constructor(quizService: QuizService);
    create(createQuizDto: CreateQuizDto): Promise<CreateQuizDto & import("./entities/quiz.entity").QuizEntity>;
    findAll(): Promise<import("./entities/quiz.entity").QuizEntity[]>;
    searchQuiz(query: SearchQuizQuery): Promise<QuizCollection>;
    getQuizById(id: string): Promise<import("./entities/quiz.entity").QuizEntity>;
    update(id: string, updateQuizDto: UpdateQuizDto): string;
    remove(id: string): string;
}
