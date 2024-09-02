import { Category } from "../entities/category.entity";
import { IGenericRepository } from "./generic.repository.interface";
export interface ICategoryRepository extends IGenericRepository<Category>{
}