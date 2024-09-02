import { Column, Entity } from "typeorm";
import { BaseOrmEntity } from "../common/baseOrmEntity.common";
@Entity('Category')
export class Category extends BaseOrmEntity{
    @Column()
    name:string
    @Column()
    updateBy:string
}
