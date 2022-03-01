import {MigrationInterface, QueryRunner} from "typeorm";

export class newField1646148498781 implements MigrationInterface {
    name = 'newField1646148498781'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`newField\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`newField\``);
    }

}
