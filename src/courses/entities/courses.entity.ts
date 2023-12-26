import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tag } from './tags.entity';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @JoinTable() // apenas na entidade principal
  @ManyToMany(() => Tag, tag => tag.courses, {
    cascade: true, //Aqui estou falando que qualquer tipo de atualização, qualquer dado deve ser alterado
  })
  tags: Tag[];
}
