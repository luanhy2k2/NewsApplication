import { Injectable } from "@nestjs/common";
import { BasePaging } from "src/domain/common/basePaging.common";
import { BaseQuerieResponse } from "src/domain/common/baseQuerieResponse.common";
import { Category } from "src/domain/entities/category.entity";
import { CategoryRepository } from "src/infrastructure/repositories/category.repository";
import { Like } from "typeorm";
@Injectable()
export class GetCategoryUsecase{
    constructor(private readonly _repo:CategoryRepository){}
    async excute(paging:BasePaging):Promise<BaseQuerieResponse<Category>>{
        const [result, total] = await this._repo.get(paging.pageIndex,paging.pageSize, paging.keyword ?
             { name: Like(`%${paging.keyword}%`) } : {}, {createdAt: "DESC"})
        return new BaseQuerieResponse<Category>(
            paging.pageIndex,
            paging.pageSize,
            result,
            total,
            paging.keyword
        );
    }
}