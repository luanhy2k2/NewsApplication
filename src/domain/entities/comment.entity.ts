import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseOrmEntity } from "../common/baseOrmEntity.common";
import {Article } from "./articel.entity";
import { Account } from "./account.entity";

@Entity('Comment')
export class Comment extends BaseOrmEntity{
    @Column()
    content:string
    @Column()
    articleId:string
    @Column()
    accountId:string
    @ManyToOne(() =>Article, article =>article.id)
    @JoinColumn({name:'articleId'})
    article:Article
    @ManyToOne(() =>Account, account =>account.id)
    @JoinColumn({name:'accountId'})
    account:Account
}