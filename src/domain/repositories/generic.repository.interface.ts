import { DeleteResult, FindOptionsOrder, FindOptionsWhere, SelectQueryBuilder, UpdateResult } from "typeorm";
export interface IGenericRepository<T> {
  add(entity: T): Promise<T>;
  findById(id: string): Promise<T | null>;
  get(
    pageIndex: number, 
    pageSize: number, 
    whereCondition: FindOptionsWhere<T>, 
    order: FindOptionsOrder<T> 
  ):Promise<[T[], number]>;

  edit(id: string, entity: T): Promise<UpdateResult>;
  deleteAsync(id: string): Promise<DeleteResult>;
  getQueryable(): SelectQueryBuilder<T>;
}