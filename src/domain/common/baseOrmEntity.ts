import { Column, PrimaryGeneratedColumn } from "typeorm";

export class BaseOrmEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    createdAt:Date;
    @Column()
    updateAt:Date;
    @Column()
    updateBy:string
}