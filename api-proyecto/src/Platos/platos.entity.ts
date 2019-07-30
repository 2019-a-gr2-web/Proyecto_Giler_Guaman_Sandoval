import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ReservasEntity} from "../Reservas/reservas.entity";

@Entity('TCOMIDA')
export class PlatosEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: 'varchar',
        length: 70,
        name: 'NOMBREPLATO',
    })
    nombrePlato: string;

    @Column({
        type: 'int',
        name: 'PRECIO',
    })
    precio: number;

    @Column({
        type: 'varchar',
        length: 70,
        name: 'CATEGORIA',
    })
    categoria: string;

    @Column({
        type: 'varchar',
        length: 300,
        name: 'URL',
    })
    url: string;

    @ManyToMany(type => ReservasEntity, reserva => reserva.platos)
    @JoinTable()
    reservas: ReservasEntity[];

}
