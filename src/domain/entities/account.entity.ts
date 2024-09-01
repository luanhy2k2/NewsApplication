import { Entity, Column } from "typeorm";
import { BaseOrmEntity } from "../common/baseOrmEntity";

@Entity('Account')
export class Account extends BaseOrmEntity{
    @Column()
    name:string;
    @Column()
    address:string;
    @Column()
    gender:Gender;
    @Column()
    birth:Date;
    @Column()
    email:string;
    @Column()
    confirmEmail:boolean;
    @Column()
    phoneNumber:string;
    @Column()
    userName:string;
    @Column()
    password:string;
    @Column()
    role:Role
}
export enum Gender{
    male,
    female
}
export enum Role{
    admin,
    editor,
    author,
    supportStaff,
    client
}