import { FindOptionsOrder, FindOptionsWhere, SelectQueryBuilder } from "typeorm";
import { BaseCommandResponse } from "../common/baseCommandResponse";
import { BaseQuerieResponse } from "../common/baseQuerieResponse";

export interface IGenericRepository<T> {
  add(entity: T): Promise<BaseCommandResponse<T>>;
  findById(id: string): Promise<T | null>;
  
  get(
    pageIndex: number, 
    pageSize: number, 
    whereCondition: FindOptionsWhere<T>, // Sử dụng FindOptionsWhere cho điều kiện lọc
    order: FindOptionsOrder<T> // Sử dụng FindOptionsOrder cho điều kiện sắp xếp
  ): Promise<BaseQuerieResponse<T>>;

  edit(id: string, entity: T): Promise<BaseCommandResponse<T>>;
  deleteAsync(id: string): Promise<BaseCommandResponse<string>>;
  getQueryable(): SelectQueryBuilder<T>;
}