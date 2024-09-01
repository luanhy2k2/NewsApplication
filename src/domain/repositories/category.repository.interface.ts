import { SelectQueryBuilder } from "typeorm";
import { BaseCommandResponse } from "../common/baseCommandResponse";
import { BaseQuerieResponse } from "../common/baseQuerieResponse";
import { Category } from "../entities/category.entity";
import { IGenericRepository } from "./generic.repository.interface";
// export interface ICategoryRepository{
//   add(category: Category): Promise<BaseCommandResponse<Category>>;
//   findById(id: string): Promise<Category | null>;
//   get(pageIndex:number, pageSize:number, keyword:string): Promise<BaseQuerieResponse<Category>>;
//   edit(category: Category): Promise<BaseCommandResponse<Category>>;
//   deleteAsync(id: string): Promise<BaseCommandResponse<string>>;
//   getAllQueryable(): SelectQueryBuilder<Category>;
// }
export interface ICategoryRepository extends IGenericRepository<Category>{
  // add(category: Category): Promise<BaseCommandResponse<Category>>;
  // findById(id: string): Promise<Category | null>;
  // get(pageIndex:number, pageSize:number, keyword:string): Promise<BaseQuerieResponse<Category>>;
  // edit(category: Category): Promise<BaseCommandResponse<Category>>;
  // deleteAsync(id: string): Promise<BaseCommandResponse<string>>;
  // getAllQueryable(): SelectQueryBuilder<Category>;
}