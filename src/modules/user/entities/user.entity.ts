import { AbstractEntity } from 'src/common/base.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from 'src/common/enum';

@Entity('users')
export class UserEntity extends AbstractEntity {
  @ApiProperty({
    description: 'User Id',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'User Email',
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    description: 'Password',
  })
  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.POSTER })
  role: UserRole;

  @BeforeInsert()
  @BeforeUpdate()
  async setPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
}
