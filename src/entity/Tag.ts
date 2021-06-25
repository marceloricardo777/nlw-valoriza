import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Expose } from 'class-transformer';



@Entity("Tags")
class Tag {
    @PrimaryColumn()
    readonly id: string;
    @Column()
    name: string;

    @Expose({ name: 'nameCustom' })
    nameCustom(): string {
        return `#${this.name}`

    }


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
