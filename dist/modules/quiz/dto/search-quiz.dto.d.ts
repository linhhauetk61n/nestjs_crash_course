import { PaginationQuery } from 'src/common/base.entity';
import { BooleanEnum, SortOrder } from 'src/common/enum';
export declare enum OrderSearchQuiz {
    Title = "title",
    CreatedAt = "createdAt",
    UpdatedAt = "updatedAt"
}
export declare class SearchQuizQuery extends PaginationQuery {
    searchText?: string;
    isActive?: BooleanEnum;
    orderBy?: OrderSearchQuiz;
    sortOrder?: SortOrder;
}
