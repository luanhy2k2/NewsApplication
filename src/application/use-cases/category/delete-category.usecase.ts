import { Injectable } from "@nestjs/common";
import { BaseCommandResponse } from "src/domain/common/baseCommandResponse.common";
import { CategoryRepository } from "src/infrastructure/repositories/category.repository";

@Injectable()
export class DeleteCategoryUsecase{
    constructor(private readonly _repo:CategoryRepository){}
    async excute(id:string):Promise<BaseCommandResponse<string>>{
        var category = await this._repo.findById(id);
        if(category = null){
            return new BaseCommandResponse<string>(false, "Dữ liệu không tồn tại!", id);
        }
        const result = await this._repo.deleteAsync(id);
        if (result.affected === 0) {
            return new BaseCommandResponse<string>(false, "Xoá dữ liệu thất bại!", id);
        }
        return new BaseCommandResponse<string>(true, "Xoá dữ liệu thành công!", id);
    }
}