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
exports.PaginationQuery = exports.Collection = exports.KeyValue = exports.PageInfoType = exports.AbstractEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
class AbstractEntity {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created Time' }),
    (0, class_transformer_1.Expose)(),
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], AbstractEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated Time' }),
    (0, class_transformer_1.Expose)(),
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], AbstractEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Deleted Time' }),
    (0, swagger_1.ApiHideProperty)(),
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], AbstractEntity.prototype, "deletedAt", void 0);
exports.AbstractEntity = AbstractEntity;
class PageInfoType {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], PageInfoType.prototype, "limit", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], PageInfoType.prototype, "offset", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], PageInfoType.prototype, "total", void 0);
exports.PageInfoType = PageInfoType;
class KeyValue {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], KeyValue.prototype, "key", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], KeyValue.prototype, "value", void 0);
exports.KeyValue = KeyValue;
class Collection {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", PageInfoType)
], Collection.prototype, "pageInfo", void 0);
exports.Collection = Collection;
class PaginationQuery {
    constructor() {
        this.offset = 0;
        this.limit = 20;
    }
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(Number.MAX_SAFE_INTEGER),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], PaginationQuery.prototype, "offset", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.Max)(Number.MAX_SAFE_INTEGER),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], PaginationQuery.prototype, "limit", void 0);
exports.PaginationQuery = PaginationQuery;
//# sourceMappingURL=base.entity.js.map