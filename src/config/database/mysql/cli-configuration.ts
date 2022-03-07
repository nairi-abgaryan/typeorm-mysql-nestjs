import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

dotenv.config({
  // Path relative to project root folder (because cli command is invoked from there)
  path: '.env',
});

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  autoLoadEntities: true,
  entities: [`${__dirname}/../../../../src/**/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/../../../migrations`],
  cli: {
    migrationsDir: `${__dirname}/../../../migrations`,
  },
  dropSchema: false,
};

export = config;
