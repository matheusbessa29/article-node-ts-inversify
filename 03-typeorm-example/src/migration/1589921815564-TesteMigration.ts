import {MigrationInterface, QueryRunner} from "typeorm";

export class TesteMigration1589921815564 implements MigrationInterface {
    name = 'TesteMigration1589921815564'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "nickName" character varying NOT NULL DEFAULT ''`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "nickName"`, undefined);
    }

}
