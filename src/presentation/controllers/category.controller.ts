import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CreateCategoryDto } from "src/application/dtos/category/create-category.dto";
import { CreateCategoryUseCase } from "src/application/use-cases/category/create-category.usecase";
import { GetCategoryUsecase } from "src/application/use-cases/category/get-category.usecase";
import { BasePaging } from "src/domain/common/basePaging";

@Controller('category')
export class CategoryController{
    constructor(
        private readonly createCategoryUsecase:CreateCategoryUseCase,
        private readonly getCategory:GetCategoryUsecase
    ){}
    @Post('create')
    async CreateCategory(@Body() createCategory:CreateCategoryDto){
        return await this.createCategoryUsecase.excute(createCategory);
    }
    @Get('get')
    async GetCategory(@Query() paging:BasePaging){
        return await this.getCategory.excute(paging);
    }
}