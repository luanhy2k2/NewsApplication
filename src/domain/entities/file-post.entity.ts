import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseOrmEntity } from "../common/baseOrmEntity";
import { Article } from "./articel.entity";

@Entity('FilePost')
export class FilePost extends BaseOrmEntity{
    @Column()
    url:string
    @Column()
    articleId:string
    @ManyToOne(() => Article, article =>article.id)
    @JoinColumn({name: 'articalId'})
    artical:Article
}
