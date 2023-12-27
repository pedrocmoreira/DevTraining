import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

import { CreateCoursesTable1703630245950 } from 'src/migrations/1703630245950-CreateCoursesTable';
import { CreateTagsTable1703631456765 } from 'src/migrations/1703631456765-CreateTagsTable';
import { CreateCoursesTagsTable1703632028176 } from 'src/migrations/1703632028176-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTags1703632309728 } from 'src/migrations/1703632309728-AddCoursesIdToCoursesTags';
import { AddTagsIdToCoursesTagsTable1703632764169 } from 'src/migrations/1703632764169-AddTagsIdToCoursesTagsTable';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false, // pega as informações da entidade e já cria diretamente no banco de dados
};

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1703630245950,
    CreateTagsTable1703631456765,
    CreateCoursesTagsTable1703632028176,
    AddCoursesIdToCoursesTags1703632309728,
    AddTagsIdToCoursesTagsTable1703632764169
  ]
});

