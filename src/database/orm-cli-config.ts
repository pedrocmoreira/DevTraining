import { DataSource } from 'typeorm';

import { dataSourceOptions } from './database.module';

import { CreateCoursesTable1703630245950 } from 'src/migrations/1703630245950-CreateCoursesTable';
import { CreateTagsTable1703631456765 } from 'src/migrations/1703631456765-CreateTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1703630245950,
    CreateTagsTable1703631456765
  ]
});

