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
exports.SearchQuizQuery = exports.OrderSearchQuiz = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const base_entity_1 = require("../../../common/base.entity");
const enum_1 = require("../../../common/enum");
var OrderSearchQuiz;
(function (OrderSearchQuiz) {
    OrderSearchQuiz["Title"] = "title";
    OrderSearchQuiz["CreatedAt"] = "createdAt";
    OrderSearchQuiz["UpdatedAt"] = "updatedAt";
})(OrderSearchQuiz = exports.OrderSearchQuiz || (exports.OrderSearchQuiz = {}));
class SearchQuizQuery extends base_entity_1.PaginationQuery {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchQuizQuery.prototype, "searchText", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enum_1.BooleanEnum }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.BooleanEnum),
    __metadata("design:type", String)
], SearchQuizQuery.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: OrderSearchQuiz }),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(OrderSearchQuiz),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchQuizQuery.prototype, "orderBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enum_1.SortOrder }),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(enum_1.SortOrder),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchQuizQuery.prototype, "sortOrder", void 0);
exports.SearchQuizQuery = SearchQuizQuery;
//# sourceMappingURL=search-quiz.dto.js.map