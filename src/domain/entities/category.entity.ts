import { Column, Entity } from "typeorm";
import { BaseEntity } from "../common/baseEntity";
import { BaseOrmEntity } from "../common/baseOrmEntity";
@Entity('Category')
export class Category extends BaseOrmEntity{
    @Column()
    name:string
    @Column()
    updateBy:string
}
