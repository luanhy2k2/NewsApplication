import { Injectable } from "@nestjs/common";
import { UpdateCategoryDto } from "src/application/dtos/category/update-category.dto";
import { BaseCommandResponse } from "src/domain/common/baseCommandResponse.common";
import { Category } from "src/domain/entities/category.entity";
import { CategoryRepository } from "src/infrastructure/repositories/category.repository";

@Injectable()
export class UpdateCategoryUseCase{
    constructor(private readonly _repo:CategoryRepository){}
    async excute(update:UpdateCategoryDto, accountId:string):Promise<BaseCommandResponse<Category>>{
        var category = await this._repo.findById(update.id)
        if(category == null){
            return new BaseCommandResponse<Category>(false,"Dữ liệu không tồn tại",null)
        }
        category.name = update.name;
        category.updateAt = new Date();
        category.updateBy = accountId;
        const result = await this._repo.edit(category.id,category);
        if(result.affected === 0){
            return new BaseCommandResponse<Category>(false, "Sửa đổi dữ liệu thất bại", category);
        }
        return new BaseCommandResponse<Category>(true, "Sửa đổi dữ liệu thành công", category);
    }
}