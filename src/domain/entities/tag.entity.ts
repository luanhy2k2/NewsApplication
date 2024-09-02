import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { BaseOrmEntity } from '../common/baseOrmEntity';

@Entity()
export class Tag extends BaseOrmEntity {
  @Column({ unique: true })
  name: string;
}
