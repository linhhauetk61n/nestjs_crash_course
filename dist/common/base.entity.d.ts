export declare class AbstractEntity {
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
export declare class PageInfoType {
    limit: number;
    offset: number;
    total: number;
}
export declare abstract class KeyValue {
    key: string;
    value: string;
}
export declare abstract class Collection<T> {
    data: T[];
    pageInfo: PageInfoType;
}
export declare class PaginationQuery {
    readonly offset: number;
    readonly limit: number;
}
