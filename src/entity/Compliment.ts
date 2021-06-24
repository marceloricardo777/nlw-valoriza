import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
@Entity('compliments')
class Compliment {
    @PrimaryColumn()
    readonly id: string;
    @Column()
    user_sender: string;
    @Column()
    user_receiver: string;
    @Column()
    tag_id: string;
    @Column()
    message: string;
    @CreateDateColumn()
    created_at: Date;

    constructor(props: Omit<Compliment, 'id'>, id?: string) {
        Object.assign(this, props);
        if (!id) {
            this.id = uuid();
        }
    }

}

export { Compliment };
