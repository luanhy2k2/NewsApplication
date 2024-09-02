import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Account } from './account.entity';
import { Article } from './articel.entity';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  rating: number;

  @ManyToOne(() => Account, account => account.id)
  user: Account;

  @ManyToOne(() => Article, article => article.id)
  article: Article;

  @CreateDateColumn()
  createdAt: Date;
}
