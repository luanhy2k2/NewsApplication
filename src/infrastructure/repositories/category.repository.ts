import { BaseCommandResponse } from "src/domain/common/baseCommandResponse";
import { BaseQuerieResponse } from "src/domain/common/baseQuerieResponse";
import { EntityRepository, Like, Repository, SelectQueryBuilder } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Category } from "src/domain/entities/category.entity";
import { ICategoryRepository } from "src/domain/repositories/category.repository.interface";
import { IGenericRepository } from "src/domain/repositories/generic.repository.interface";
import { GenericRepository } from "./generic.repository";
@Injectable()
// export class CategoryRepository implements ICategoryRepository {
//     constructor(
//         @InjectRepository(Category)
//         private readonly repository: Repository<Category>,
//       ) {}
//       getAllQueryable(): SelectQueryBuilder<Category> {
//         return this.repository.createQueryBuilder('category');
//       }

//     async add(category: Category): Promise<BaseCommandResponse<Category>> {
//         const categoryEntity = this.repository.create(category);
//         await this.repository.save(categoryEntity);
//         return new BaseCommandResponse<Category>(true, "Thêm dữ liệu thành công", category);
//     }

//     async edit(category: Category): Promise<BaseCommandResponse<Category>> {
//         await this.repository.update(category.id, category);
//         return new BaseCommandResponse<Category>(true, "Sửa thông tin thành công!", category);
//     }

//     async deleteAsync(id: string): Promise<BaseCommandResponse<string>> {
//         await this.repository.delete(id);
//         return new BaseCommandResponse<string>(true, "Xoá thông tin thành công!", id);
//     }

//     async findById(id: string): Promise<Category> {
//         const result = await this.repository.findOne({ where: { id } });
//         if (!result) 
//             return null;
//         return result
//     }

//     async get(pageIndex: number, pageSize: number, keyword: string): Promise<BaseQuerieResponse<Category>> {
//         const [result, total] = await this.repository.findAndCount({
//             skip: (pageIndex - 1) * pageSize,
//             take: pageSize,
//             where: keyword ? { name: Like(`%${keyword}%`) } : {}
//         });
//         return new BaseQuerieResponse<Category>(pageIndex, pageSize, result, total, keyword);
//     }
// }
export class CategoryRepository extends GenericRepository<Category> implements ICategoryRepository  {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ) {
        super(categoryRepository);
    }
}