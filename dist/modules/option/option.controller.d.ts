import { OptionService } from './option.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { QuestionService } from '../question/question.service';
export declare class OptionController {
    private readonly optionService;
    private readonly questionService;
    constructor(optionService: OptionService, questionService: QuestionService);
    create(createOptionDto: CreateOptionDto): Promise<{
        text: string;
        isCorrect: boolean;
        question: import("../question/entities/question.entity").QuestionEntity;
    } & import("./entities/option.entity").OptionEntity>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOptionDto: UpdateOptionDto): string;
    remove(id: string): string;
}
