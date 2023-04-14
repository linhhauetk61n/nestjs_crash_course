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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizCollection = exports.QuizEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../../common/base.entity");
const question_entity_1 = require("../../../modules/question/entities/question.entity");
let QuizEntity = class QuizEntity extends base_entity_1.AbstractEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QuizEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], QuizEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], QuizEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], QuizEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => question_entity_1.QuestionEntity, (question) => question.quiz),
    __metadata("design:type", Array)
], QuizEntity.prototype, "questions", void 0);
QuizEntity = __decorate([
    (0, typeorm_1.Entity)('quizzes')
], QuizEntity);
exports.QuizEntity = QuizEntity;
class QuizCollection extends base_entity_1.Collection {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => QuizEntity),
    (0, swagger_1.ApiProperty)({ type: () => QuizEntity, isArray: true }),
    __metadata("design:type", Array)
], QuizCollection.prototype, "data", void 0);
exports.QuizCollection = QuizCollection;
//# sourceMappingURL=quiz.entity.js.map