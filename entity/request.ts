import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Test2 {
    @PrimaryGeneratedColumn()
    id: number

    @Column("datetime")
    time: string

    @Column()
    ip: string

    @Column()
    type: string

    constructor(time: string, ip: string, type: string) {
        this.id = 0
        this.time = time
        this.ip = ip
        this.type = type
    }
}
