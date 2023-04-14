import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuizService } from '../quiz/quiz.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Question')
@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly quizService: QuizService,
  ) {}

  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    const quiz = await this.quizService.findOne(createQuestionDto.quizId);
    return this.questionService.createQuestion(createQuestionDto, quiz);
  }

  @Get()
  findAll() {
    return this.questionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findQuestionById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionService.remove(+id);
  }
}
