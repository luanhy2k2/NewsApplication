import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseOrmEntity } from "../common/baseOrmEntity.common";
import { Account } from "./account.entity";
import { Category } from "./category.entity";
import { AppProvalStatus } from "../common/appProval.common";

@Entity('Article')
export class Article extends BaseOrmEntity{
    @Column()
    tital:string;
    @Column()
    content:string;
    @Column()
    accountId:string;
    @Column()
    categoryId:string;
    @Column()
    appProval:AppProvalStatus;
    @ManyToOne(() =>Account, account =>account.id)
    @JoinColumn({name:'accountId'})
    account:Account
    @ManyToOne(() => Category, category =>category.id)
    @JoinColumn({name:'categoryId'})
    category:Category
}