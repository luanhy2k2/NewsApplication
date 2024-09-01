import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategoryTable1725203864609 implements MigrationInterface {
    name = 'CreateCategoryTable1725203864609'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Category\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime NOT NULL, \`updateAt\` datetime NOT NULL, \`updateBy\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`Category\``);
    }

}
