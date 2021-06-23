import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("Tags")
class Tag {
    @PrimaryColumn()
    readonly id: string;
    @Column()
    name: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    constructor(props: Omit<Tag, 'id'>, id?: string) {
        Object.assign(this, props);
        if (!id) {
            this.id = uuid();
        }
    }
}

export { Tag }
