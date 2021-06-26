import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUseraddPassword1624725625652 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users',
            new TableColumn({
                name: 'password',
                type: 'varchar',
                isNullable: true
            }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'password');

    }

}
