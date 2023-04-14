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
exports.QuizService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const enum_1 = require("../../common/enum");
const typeorm_2 = require("typeorm");
const quiz_entity_1 = require("./entities/quiz.entity");
let QuizService = class QuizService {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.quizRepository = this.dataSource.getRepository(quiz_entity_1.QuizEntity);
    }
    async create(createQuizDto) {
        return await this.dataSource.getRepository(quiz_entity_1.QuizEntity).save(createQuizDto);
    }
    async getAllQuiz() {
        return await this.quizRepository
            .createQueryBuilder('q')
            .leftJoinAndSelect('q.questions', 'qt')
            .leftJoinAndSelect('qt.options', 'o')
            .getMany();
    }
    async findOne(id) {
        return await this.dataSource
            .getRepository(quiz_entity_1.QuizEntity)
            .findOne({ where: { id } });
    }
    async searchQuiz({ searchText, isActive, orderBy, sortOrder, limit, offset, }) {
        const query = await this.quizRepository
            .createQueryBuilder('q')
            .leftJoinAndSelect('q.questions', 'qt')
            .leftJoinAndSelect('qt.options', 'o');
        if (isActive) {
            query.andWhere('q.isActive = :active', {
                active: isActive === enum_1.BooleanEnum.TRUE ? true : false,
            });
        }
        if (searchText) {
            query.andWhere(new typeorm_2.Brackets((qb) => {
                qb.where('"title" ILIKE :searchText', {
                    searchText: `%${searchText}%`,
                }),
                    qb.orWhere('"description" ILIKE :searchText', {
                        searchText: `%${searchText}%`,
                    });
            }));
        }
        if (orderBy && sortOrder) {
            query.orderBy(`q.${orderBy}`, sortOrder);
        }
        else {
            query.orderBy('q.createdAt', 'DESC');
        }
        const [data, total] = await query
            .skip(offset)
            .take(limit)
            .getManyAndCount();
        return {
            data: data,
            pageInfo: {
                total: total,
                offset: offset,
                limit: limit,
            },
        };
    }
    async getQuizById(id) {
        return await this.dataSource.getRepository(quiz_entity_1.QuizEntity).findOne({
            where: { id },
            relations: ['questions', 'questions.options'],
        });
    }
    update(id, updateQuizDto) {
        return `This action updates a #${id} quiz`;
    }
    remove(id) {
        return `This action removes a #${id} quiz`;
    }
};
QuizService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], QuizService);
exports.QuizService = QuizService;
//# sourceMappingURL=quiz.service.js.map