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
exports.ResponseController = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const swagger_1 = require("@nestjs/swagger");
const event_constant_1 = require("../../common/constants/event.constant");
let ResponseController = class ResponseController {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
    }
    async handleResponseQuestion() {
        console.log('___Before emit');
        this.eventEmitter.emit(event_constant_1.event.RESPONSE_SUBMITTED, {
            userId: 1,
            optionId: 4,
        });
        console.log('___Event emitted');
        return { message: 'Response taken' };
    }
};
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ResponseController.prototype, "handleResponseQuestion", null);
ResponseController = __decorate([
    (0, swagger_1.ApiTags)('Response'),
    (0, common_1.Controller)('response'),
    __metadata("design:paramtypes", [event_emitter_1.EventEmitter2])
], ResponseController);
exports.ResponseController = ResponseController;
//# sourceMappingURL=response.controller.js.map