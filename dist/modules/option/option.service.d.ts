import { DataSource } from 'typeorm';
import { QuestionEntity } from '../question/entities/question.entity';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { OptionEntity } from './entities/option.entity';
export declare class OptionService {
    private dataSource;
    constructor(dataSource: DataSource);
    optionRepository: import("typeorm").Repository<OptionEntity>;
    createOption(createOptionDto: CreateOptionDto, question: QuestionEntity): Promise<{
        text: string;
        isCorrect: boolean;
        question: QuestionEntity;
    } & OptionEntity>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOptionDto: UpdateOptionDto): string;
    remove(id: number): string;
}
