import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceAsyncOptions } from 'src/database/dataSource';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { OptionModule } from './modules/option/option.module';
import { QuestionModule } from './modules/question/question.module';
import { QuizModule } from './modules/quiz/quiz.module';
import { UserModule } from './modules/user/user.module';
import { ResponseModule } from './modules/response/response.module';
import { UploadModule } from './modules/upload/upload.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EventEmitterModule.forRoot(),
    QuizModule,
    TypeOrmModule.forRootAsync(dataSourceAsyncOptions),
    MulterModule.register({ dest: './uploads' }),
    QuestionModule,
    OptionModule,
    UserModule,
    AuthModule,
    ResponseModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(ApiTokenCheckMiddleware)
//       .forRoutes({ path: '*', method: RequestMethod.ALL });
//   }
// }
export class AppModule {}
