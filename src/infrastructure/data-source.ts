import { DataSourceOptions, DataSource } from "typeorm";

export const dataSourceOption: DataSourceOptions = {
    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'news_app',
    entities: ['dist/domain/entities/*.entity.js'],
    migrations: ['dist/infrastructure/migrations/*.js'],
    synchronize:false
}
const dataSource = new DataSource(dataSourceOption);
export default dataSource;