import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config();

export const dataSourceAsyncOptions: TypeOrmModuleAsyncOptions = {
  useFactory: () => {
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['dist/database/migrations/*{.ts,.js}'],
    };
  },
};

const dataSource = new DataSource(
  dataSourceAsyncOptions.useFactory() as DataSourceOptions,
);
export default dataSource;
