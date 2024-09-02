import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "src/application/dtos/category/create-category.dto";
import { BaseCommandResponse } from "src/domain/common/baseCommandResponse.common";
import { Category } from "src/domain/entities/category.entity";
import { CategoryRepository } from "src/infrastructure/repositories/category.repository";
@Injectable()
export class CreateCategoryUseCase{
    constructor(
        private readonly categoryRepository: CategoryRepository,
    ){}
    async excute(entity:CreateCategoryDto):Promise<BaseCommandResponse<Category>>{
        const newCategory = new Category();
        newCategory.name = entity.name;
        newCategory.createdAt = new Date();
        newCategory.updateAt = new Date();
        newCategory.updateBy = "";
        const result = await this.categoryRepository.add(newCategory);
        return new BaseCommandResponse<Category>(true, "Thêm thông tin thành công!", result);
        // const query = this._repo.getAllQueryable();
        // const categories = await query.where('category.isActive = :isActive', { isActive: true }).getMany();
    }
}