import { Injectable } from "@nestjs/common";
import { BasePaging } from "src/domain/common/basePaging";
import { CategoryRepository } from "src/infrastructure/repositories/category.repository";
import { Like } from "typeorm";
@Injectable()
export class GetCategoryUsecase{
    constructor(private readonly _repo:CategoryRepository){}
    async excute(paging:BasePaging){
        var result = await this._repo.get(paging.pageIndex,paging.pageSize, paging.keyword ?
             { name: Like(`%${paging.keyword}%`) } : {}, {createdAt: "DESC"})
        return result;
    }
}