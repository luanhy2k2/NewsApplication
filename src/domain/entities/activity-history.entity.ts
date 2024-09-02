import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Account } from './account.entity';

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Account, account => account.id)
  user: Account;
  @Column()
  action: string;
  @Column()
  createdAt: Date;
}
