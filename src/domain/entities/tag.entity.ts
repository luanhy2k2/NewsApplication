import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { BaseOrmEntity } from '../common/baseOrmEntity.common';

@Entity()
export class Tag extends BaseOrmEntity {
  @Column({ unique: true })
  name: string;
}
