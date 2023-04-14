"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const question_entity_1 = require("./entities/question.entity");
let QuestionService = class QuestionService {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.questionRepo = this.dataSource.getRepository(question_entity_1.QuestionEntity);
    }
    async createQuestion(createQuestionDto, quiz) {
        return await this.dataSource
            .getRepository(question_entity_1.QuestionEntity)
            .save({ question: createQuestionDto.question, quiz: quiz });
    }
    async findAll() {
        return await this.questionRepo.find({ relations: ['quiz', 'options'] });
    }
    async findQuestionById(id) {
        return await this.questionRepo.findOne({
            where: { id },
            relations: ['quiz', 'options'],
        });
    }
    update(id, updateQuestionDto) {
        return `This action updates a #${id} question`;
    }
    remove(id) {
        return `This action removes a #${id} question`;
    }
};
QuestionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map