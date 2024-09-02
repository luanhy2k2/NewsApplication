import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateCategoryUseCase } from 'src/application/use-cases/category/create-category.usecase';
import { Category } from 'src/domain/entities/category.entity';
import { CategoryRepository } from 'src/infrastructure/repositories/category.repository';
import { CategoryController } from '../controllers/category.controller';
import { GetCategoryUsecase } from 'src/application/use-cases/category/get-category.usecase';
import { UpdateCategoryUseCase } from 'src/application/use-cases/category/update-category.usecase';
import { DeleteCategoryUsecase } from 'src/application/use-cases/category/delete-category.usecase';



@Module({
  imports: [
    TypeOrmModule.forFeature([Category]), // Import CategoryEntity vào TypeOrmModule
  ],
  providers: [
    CategoryRepository,
    CreateCategoryUseCase,
    GetCategoryUsecase,
    UpdateCategoryUseCase,
    DeleteCategoryUsecase
  ],
  controllers:[
    CategoryController
  ],
})
export class CategoriesModule {}
