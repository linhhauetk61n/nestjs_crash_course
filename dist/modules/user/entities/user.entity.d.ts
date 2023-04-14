import { AbstractEntity } from 'src/common/base.entity';
import { UserRole } from 'src/common/enum';
export declare class UserEntity extends AbstractEntity {
    id: string;
    email: string;
    password: string;
    role: UserRole;
    setPassword(): Promise<void>;
}
