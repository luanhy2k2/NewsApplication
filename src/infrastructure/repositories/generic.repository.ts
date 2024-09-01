import { Repository, SelectQueryBuilder, Like, EntityTarget, FindOptionsOrder, FindOptionsWhere } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IGenericRepository } from 'src/domain/repositories/generic.repository.interface';
import { BaseCommandResponse } from 'src/domain/common/baseCommandResponse';
import { BaseQuerieResponse } from 'src/domain/common/baseQuerieResponse';


export class GenericRepository<T> implements IGenericRepository<T> {
    constructor(
        private readonly repository: Repository<T>
    ) {}

    getQueryable(): SelectQueryBuilder<T> {
        return this.repository.createQueryBuilder('entity');
    }

    async add(entity: T): Promise<BaseCommandResponse<T>> {
        const entityInstance = this.repository.create(entity);
        await this.repository.save(entityInstance);
        return new BaseCommandResponse<T>(true, "Thêm dữ liệu thành công", entity);
    }

    async edit(id: string, entity: Partial<T>): Promise<BaseCommandResponse<T>> {
        await this.repository.update(id, entity as any);
        const updatedEntity = await this.repository.findOne({
            where: { id } as any // Có thể cần điều chỉnh cho đúng kiểu
        });
        return new BaseCommandResponse<T>(true, "Sửa thông tin thành công!", updatedEntity);
    }

    async deleteAsync(id: string): Promise<BaseCommandResponse<string>> {
        await this.repository.delete(id);
        return new BaseCommandResponse<string>(true, "Xoá thông tin thành công!", id);
    }

    async findById(id: string): Promise<T> {
        const result = await this.repository.findOneBy({ id } as any); // Cần thay thế bằng kiểu phù hợp
        if (!result) 
            return null;
        return result;
    }

    async get(pageIndex: number, pageSize: number, 
        condition: FindOptionsWhere<T>,
        order: FindOptionsOrder<T> = {}
    ): Promise<BaseQuerieResponse<T>> {
        // const condition = whereCondition({} as T);
        const [result, total] = await this.repository.findAndCount({
            skip: (pageIndex - 1) * pageSize,
            take: pageSize,
            where: condition,
            order
        });
        return new BaseQuerieResponse<T>(pageIndex, pageSize, result, total, "");
    }
    
}

