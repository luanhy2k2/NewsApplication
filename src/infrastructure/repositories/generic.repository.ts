import { Repository, SelectQueryBuilder, FindOptionsOrder, FindOptionsWhere, DeleteResult, UpdateResult } from 'typeorm';
import { IGenericRepository } from 'src/domain/repositories/generic.repository.interface';

export class GenericRepository<T> implements IGenericRepository<T> {
    constructor(
        private readonly repository: Repository<T>
    ) {}

    getQueryable(): SelectQueryBuilder<T> {
        return this.repository.createQueryBuilder('entity');
    }

    async add(entity: T): Promise<T> {
        try {
            const entityInstance = this.repository.create(entity);
            const savedEntity = await this.repository.save(entityInstance);
            return savedEntity;
        } catch (error) {
            console.error('Error adding entity:', error.message);
            if (error.code === '23503') { 
                throw new Error('Foreign key constraint violation.');
            }
            throw error;
        }
    }

    async edit(id: string, entity: T): Promise<UpdateResult> {
        try{
            const result = await this.repository.update(id, entity as any);
            return result;
        } catch(error){
            console.error('error updating entity:', error.message)
            if (error.code === '23503') { 
                throw new Error('Foreign key constraint violation.');
            }
            throw error;
        }
        
    }

    async deleteAsync(id: string): Promise<DeleteResult> {
        const result = await this.repository.delete(id);
        return result;
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
    ):Promise<[T[], number]> {
        const [result, total] = await this.repository.findAndCount({
            skip: (pageIndex - 1) * pageSize,
            take: pageSize,
            where: condition,
            order
        });
        return [result,total];
    }
    
}

