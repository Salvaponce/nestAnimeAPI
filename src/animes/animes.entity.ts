import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Animes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 200 })
  synopsis: string;

  @Column("int")
  episodes: number;

  @Column("int")
  score: number;

  @Column('text', { array: true, nullable: true }) // 'text' is the array type in PostgreSQL
  categories: string[];
}