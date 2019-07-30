import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ReservasEntity} from "../Reservas/reservas.entity";
import {UsuarioEntity} from "../Usuario/usuario.entity";

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

    @ManyToOne(type => ReservasEntity, reserva => reserva.platos)
    reserva: ReservasEntity;

}
