import { DataSource } from 'typeorm';

import { dataSourceOptions } from './database.module';

import { CreateCoursesTable1703630245950 } from 'src/migrations/1703630245950-CreateCoursesTable';
import { CreateTagsTable1703631456765 } from 'src/migrations/1703631456765-CreateTagsTable';
import { CreateCoursesTagsTable1703632028176 } from 'src/migrations/1703632028176-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTags1703632309728 } from 'src/migrations/1703632309728-AddCoursesIdToCoursesTags';
import { AddTagsIdToCoursesTagsTable1703632764169 } from 'src/migrations/1703632764169-AddTagsIdToCoursesTagsTable';

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

