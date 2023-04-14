import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OptionService } from './option.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { QuestionService } from '../question/question.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Option')
@Controller('option')
export class OptionController {
  constructor(
    private readonly optionService: OptionService,
    private readonly questionService: QuestionService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createOptionDto: CreateOptionDto) {
    const question = await this.questionService.findQuestionById(
      createOptionDto.questionId,
    );
    return this.optionService.createOption(createOptionDto, question);
  }

  @Get()
  findAll() {
    return this.optionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.optionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOptionDto: UpdateOptionDto) {
    return this.optionService.update(+id, updateOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.optionService.remove(+id);
  }
}
