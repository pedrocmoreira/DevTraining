import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tag } from './tags.entity';
import { randomUUID } from 'node:crypto';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @JoinTable() // apenas na entidade principal
  @ManyToMany(() => Tag, tag => tag.courses, {
    cascade: true, //Aqui estou falando que qualquer tipo de atualização, qualquer dado deve ser alterado
  })
  tags: Tag[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @BeforeInsert()
  genaratedId() {
    if (this.id) {
      return
    }

    this.id = randomUUID();
  }
}
