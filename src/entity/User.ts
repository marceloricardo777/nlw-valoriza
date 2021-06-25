import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
@Entity('users')
class User {
    @PrimaryColumn()
    readonly id: string;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    admin: boolean;

    @Exclude()
    password: string
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);
        if (!id) {
            this.id = uuid();
        }
    }

}

export { User };
