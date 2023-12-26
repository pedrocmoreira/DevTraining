import { DataSource } from 'typeorm';

import { dataSourceOptions } from './database.module';

import { CreateCoursesTable1703630245950 } from 'src/migrations/1703630245950-CreateCoursesTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1703630245950,
  ]
});

