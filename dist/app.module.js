"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const event_emitter_1 = require("@nestjs/event-emitter");
const typeorm_1 = require("@nestjs/typeorm");
const dataSource_1 = require("./database/dataSource");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./modules/auth/auth.module");
const option_module_1 = require("./modules/option/option.module");
const question_module_1 = require("./modules/question/question.module");
const quiz_module_1 = require("./modules/quiz/quiz.module");
const user_module_1 = require("./modules/user/user.module");
const response_module_1 = require("./modules/response/response.module");
const upload_module_1 = require("./modules/upload/upload.module");
const platform_express_1 = require("@nestjs/platform-express");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            event_emitter_1.EventEmitterModule.forRoot(),
            quiz_module_1.QuizModule,
            typeorm_1.TypeOrmModule.forRootAsync(dataSource_1.dataSourceAsyncOptions),
            platform_express_1.MulterModule.register({ dest: './uploads' }),
            question_module_1.QuestionModule,
            option_module_1.OptionModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            response_module_1.ResponseModule,
            upload_module_1.UploadModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map