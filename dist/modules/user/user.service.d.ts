import { DataSource } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
export declare class UserService {
    private dataSource;
    constructor(dataSource: DataSource);
    userRepository: import("typeorm").Repository<UserEntity>;
    register(createUserDto: CreateUserDto): Promise<UserEntity>;
    getUserByEmail(email: string): Promise<UserEntity>;
    getUserById(id: string): Promise<UserEntity | undefined>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
    handleIfResponseIsCorrect1(payload: any): void;
}
