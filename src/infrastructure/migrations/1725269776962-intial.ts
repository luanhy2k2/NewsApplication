import { MigrationInterface, QueryRunner } from "typeorm";

export class Intial1725269776962 implements MigrationInterface {
    name = 'Intial1725269776962'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Account\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime NOT NULL, \`updateAt\` datetime NOT NULL, \`name\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`gender\` int NOT NULL, \`birth\` datetime NOT NULL, \`email\` varchar(255) NOT NULL, \`confirmEmail\` tinyint NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`userName\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Category\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime NOT NULL, \`updateAt\` datetime NOT NULL, \`name\` varchar(255) NOT NULL, \`updateBy\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Article\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime NOT NULL, \`updateAt\` datetime NOT NULL, \`tital\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`accountId\` varchar(255) NOT NULL, \`categoryId\` varchar(255) NOT NULL, \`appProval\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`FilePost\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime NOT NULL, \`updateAt\` datetime NOT NULL, \`url\` varchar(255) NOT NULL, \`articleId\` varchar(255) NOT NULL, \`articalId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rating\` (\`id\` varchar(36) NOT NULL, \`rating\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`userId\` varchar(36) NULL, \`articleId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Comment\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime NOT NULL, \`updateAt\` datetime NOT NULL, \`content\` varchar(255) NOT NULL, \`articleId\` varchar(255) NOT NULL, \`accountId\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tag\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime NOT NULL, \`updateAt\` datetime NOT NULL, \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_6a9775008add570dc3e5a0bab7\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`history\` (\`id\` int NOT NULL AUTO_INCREMENT, \`action\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL, \`userId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`article_tag\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime NOT NULL, \`updateAt\` datetime NOT NULL, \`articleId\` varchar(255) NOT NULL, \`tagId\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Article\` ADD CONSTRAINT \`FK_16fef3bf95a9294f8da0bdb924c\` FOREIGN KEY (\`accountId\`) REFERENCES \`Account\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Article\` ADD CONSTRAINT \`FK_fc92ba6e5a394e36c2452b8f387\` FOREIGN KEY (\`categoryId\`) REFERENCES \`Category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`FilePost\` ADD CONSTRAINT \`FK_33f744eb55bc7d52a0172d8be79\` FOREIGN KEY (\`articalId\`) REFERENCES \`Article\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rating\` ADD CONSTRAINT \`FK_a6c53dfc89ba3188b389ef29a62\` FOREIGN KEY (\`userId\`) REFERENCES \`Account\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rating\` ADD CONSTRAINT \`FK_b380e87c741b707469dd00829a9\` FOREIGN KEY (\`articleId\`) REFERENCES \`Article\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Comment\` ADD CONSTRAINT \`FK_a627c5d92c1c1ccca96da895180\` FOREIGN KEY (\`articleId\`) REFERENCES \`Article\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Comment\` ADD CONSTRAINT \`FK_973a8c7cf27c4555af37aa94245\` FOREIGN KEY (\`accountId\`) REFERENCES \`Account\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`history\` ADD CONSTRAINT \`FK_7d339708f0fa8446e3c4128dea9\` FOREIGN KEY (\`userId\`) REFERENCES \`Account\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`article_tag\` ADD CONSTRAINT \`FK_602d4921b27c9a7cb6c095992b4\` FOREIGN KEY (\`articleId\`) REFERENCES \`Article\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`article_tag\` ADD CONSTRAINT \`FK_bbbd0832bdd107597b596d63f69\` FOREIGN KEY (\`tagId\`) REFERENCES \`tag\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`article_tag\` DROP FOREIGN KEY \`FK_bbbd0832bdd107597b596d63f69\``);
        await queryRunner.query(`ALTER TABLE \`article_tag\` DROP FOREIGN KEY \`FK_602d4921b27c9a7cb6c095992b4\``);
        await queryRunner.query(`ALTER TABLE \`history\` DROP FOREIGN KEY \`FK_7d339708f0fa8446e3c4128dea9\``);
        await queryRunner.query(`ALTER TABLE \`Comment\` DROP FOREIGN KEY \`FK_973a8c7cf27c4555af37aa94245\``);
        await queryRunner.query(`ALTER TABLE \`Comment\` DROP FOREIGN KEY \`FK_a627c5d92c1c1ccca96da895180\``);
        await queryRunner.query(`ALTER TABLE \`rating\` DROP FOREIGN KEY \`FK_b380e87c741b707469dd00829a9\``);
        await queryRunner.query(`ALTER TABLE \`rating\` DROP FOREIGN KEY \`FK_a6c53dfc89ba3188b389ef29a62\``);
        await queryRunner.query(`ALTER TABLE \`FilePost\` DROP FOREIGN KEY \`FK_33f744eb55bc7d52a0172d8be79\``);
        await queryRunner.query(`ALTER TABLE \`Article\` DROP FOREIGN KEY \`FK_fc92ba6e5a394e36c2452b8f387\``);
        await queryRunner.query(`ALTER TABLE \`Article\` DROP FOREIGN KEY \`FK_16fef3bf95a9294f8da0bdb924c\``);
        await queryRunner.query(`DROP TABLE \`article_tag\``);
        await queryRunner.query(`DROP TABLE \`history\``);
        await queryRunner.query(`DROP INDEX \`IDX_6a9775008add570dc3e5a0bab7\` ON \`tag\``);
        await queryRunner.query(`DROP TABLE \`tag\``);
        await queryRunner.query(`DROP TABLE \`Comment\``);
        await queryRunner.query(`DROP TABLE \`rating\``);
        await queryRunner.query(`DROP TABLE \`FilePost\``);
        await queryRunner.query(`DROP TABLE \`Article\``);
        await queryRunner.query(`DROP TABLE \`Category\``);
        await queryRunner.query(`DROP TABLE \`Account\``);
    }

}
