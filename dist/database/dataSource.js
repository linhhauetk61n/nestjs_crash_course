"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceAsyncOptions = void 0;
const dotenv = require("dotenv");
const typeorm_1 = require("typeorm");
dotenv.config();
exports.dataSourceAsyncOptions = {
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
const dataSource = new typeorm_1.DataSource(exports.dataSourceAsyncOptions.useFactory());
exports.default = dataSource;
//# sourceMappingURL=dataSource.js.map