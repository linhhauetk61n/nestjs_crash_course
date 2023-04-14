import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PaginationQuery } from 'src/common/base.entity';
import { BooleanEnum, SortOrder } from 'src/common/enum';

export enum OrderSearchQuiz {
  Title = 'title',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
}

export class SearchQuizQuery extends PaginationQuery {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  searchText?: string;

  @ApiPropertyOptional({ enum: BooleanEnum })
  @IsOptional()
  @IsEnum(BooleanEnum)
  isActive?: BooleanEnum;

  @ApiPropertyOptional({ enum: OrderSearchQuiz })
  @ApiProperty()
  @IsEnum(OrderSearchQuiz)
  @IsOptional()
  orderBy?: OrderSearchQuiz;

  @ApiPropertyOptional({ enum: SortOrder })
  @ApiProperty()
  @IsEnum(SortOrder)
  @IsOptional()
  sortOrder?: SortOrder;
}
