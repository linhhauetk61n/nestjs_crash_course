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
exports.QuizController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const enum_1 = require("../../common/enum");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const create_quiz_dto_1 = require("./dto/create-quiz.dto");
const search_quiz_dto_1 = require("./dto/search-quiz.dto");
const update_quiz_dto_1 = require("./dto/update-quiz.dto");
const quiz_service_1 = require("./quiz.service");
let QuizController = class QuizController {
    constructor(quizService) {
        this.quizService = quizService;
    }
    create(createQuizDto) {
        return this.quizService.create(createQuizDto);
    }
    findAll() {
        return this.quizService.getAllQuiz();
    }
    searchQuiz(query) {
        return this.quizService.searchQuiz(query);
    }
    getQuizById(id) {
        return this.quizService.getQuizById(id);
    }
    update(id, updateQuizDto) {
        return this.quizService.update(+id, updateQuizDto);
    }
    remove(id) {
        return this.quizService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(enum_1.UserRole.ADMIN, enum_1.UserRole.POSTER),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_quiz_dto_1.CreateQuizDto]),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'API to search all quiz with filter' }),
    (0, swagger_1.ApiExtraModels)(search_quiz_dto_1.SearchQuizQuery),
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_quiz_dto_1.SearchQuizQuery]),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "searchQuiz", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "getQuizById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_quiz_dto_1.UpdateQuizDto]),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "remove", null);
QuizController = __decorate([
    (0, swagger_1.ApiTags)('Quiz'),
    (0, common_1.Controller)('quiz'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [quiz_service_1.QuizService])
], QuizController);
exports.QuizController = QuizController;
//# sourceMappingURL=quiz.controller.js.map