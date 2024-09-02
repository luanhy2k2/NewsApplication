import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { CreateCategoryDto } from "src/application/dtos/category/create-category.dto";
import { UpdateCategoryDto } from "src/application/dtos/category/update-category.dto";
import { CreateCategoryUseCase } from "src/application/use-cases/category/create-category.usecase";
import { DeleteCategoryUsecase } from "src/application/use-cases/category/delete-category.usecase";
import { GetCategoryUsecase } from "src/application/use-cases/category/get-category.usecase";
import { UpdateCategoryUseCase } from "src/application/use-cases/category/update-category.usecase";
import { BasePaging } from "src/domain/common/basePaging.common";

@Controller('category')
export class CategoryController{
    constructor(
        private readonly createUsecase:CreateCategoryUseCase,
        private readonly getUsecase:GetCategoryUsecase,
        private readonly updateUsecase:UpdateCategoryUseCase,
        private readonly deleteUsecase:DeleteCategoryUsecase
    ){}
    @Post('create')
    async CreateCategory(@Body() createCategory:CreateCategoryDto){
        return await this.createUsecase.excute(createCategory);
    }
    @Get('get')
    async GetCategory(@Query() paging:BasePaging){
        return await this.getUsecase.excute(paging);
    }
    @Put('update')
    async UpdateCategory(@Body() updateCategory:UpdateCategoryDto){
        var accountId = "";
        return await this.updateUsecase.excute(updateCategory, accountId);
    }
    @Delete(':id')
    async DeleteCategory(@Param('id') id:string){
        return await this.deleteUsecase.excute(id);
    }
}