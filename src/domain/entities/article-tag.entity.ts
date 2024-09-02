import { Entity, PrimaryColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { BaseOrmEntity } from '../common/baseOrmEntity.common';
import { Article } from './articel.entity';
import { Tag } from './tag.entity';

@Entity()
export class ArticleTag extends BaseOrmEntity {
  @Column()
  articleId: number;

  @Column()
  tagId: number;

  @ManyToOne(() => Article, article => article.id)
  @JoinColumn({name:'articleId'})
  article: Article;
  @ManyToOne(() => Tag, tag => tag.id)
  @JoinColumn({name:'tagId'})
  tag: Tag;
}
