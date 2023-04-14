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
exports.OptionEntity = void 0;
const base_entity_1 = require("../../../common/base.entity");
const question_entity_1 = require("../../question/entities/question.entity");
const typeorm_1 = require("typeorm");
let OptionEntity = class OptionEntity extends base_entity_1.AbstractEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OptionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OptionEntity.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], OptionEntity.prototype, "isCorrect", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => question_entity_1.QuestionEntity, (question) => question.options),
    __metadata("design:type", question_entity_1.QuestionEntity)
], OptionEntity.prototype, "question", void 0);
OptionEntity = __decorate([
    (0, typeorm_1.Entity)('options')
], OptionEntity);
exports.OptionEntity = OptionEntity;
//# sourceMappingURL=option.entity.js.map