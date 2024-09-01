import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './presentation/modules/category.module';
import { Category } from './domain/entities/category.entity';
import dataSource, { dataSourceOption } from './infrastructure/data-source';
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOption),
    CategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
