import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import {
  ApiBearerAuth,
  ApiExtraModels,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { event } from 'src/common/constants/event.constant';
import { UserRole } from 'src/common/enum';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { SearchQuizQuery } from './dto/search-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { QuizCollection } from './entities/quiz.entity';
import { QuizService } from './quiz.service';

@ApiTags('Quiz')
@Controller('quiz')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.POSTER)
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizService.create(createQuizDto);
  }

  @Get()
  findAll() {
    return this.quizService.getAllQuiz();
  }

  @ApiOperation({ description: 'API to search all quiz with filter' })
  @ApiExtraModels(SearchQuizQuery)
  @Get('search')
  searchQuiz(@Query() query: SearchQuizQuery): Promise<QuizCollection> {
    return this.quizService.searchQuiz(query);
  }

  @Get(':id')
  getQuizById(@Param('id', ParseUUIDPipe) id: string) {
    return this.quizService.getQuizById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
    return this.quizService.update(+id, updateQuizDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizService.remove(+id);
  }

  // @OnEvent(event.RESPONSE_SUBMITTED)
  // checkQuizCompleted(payload) {
  //   console.log('QUIZ_SERVICE', payload, new Date().getTime());
  // }
}
