import * as dotenv from 'dotenv';
import {TypeOrmModuleOptions} from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

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
  // Allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev.
  migrations: [`${__dirname}/../../../migrations`],
  cli: {
    // Location of migration should be inside src folder
    // to be compiled into dist/ folder.
    // entitiesDir: process.env.TYPEORM_ENTITIES_DIR,
    migrationsDir: `${__dirname}/../../../migrations`,
    // subscribersDir: process.env.TYPEORM_SUBSCRIBERS_DIR,
  },
  dropSchema: false,
};

export = config;
