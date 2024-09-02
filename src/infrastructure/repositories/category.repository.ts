import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Category } from "src/domain/entities/category.entity";
import { ICategoryRepository } from "src/domain/repositories/category.repository.interface";
import { GenericRepository } from "./generic.repository";
@Injectable()
export class CategoryRepository extends GenericRepository<Category> implements ICategoryRepository  {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ) {
        super(categoryRepository);
    }
}