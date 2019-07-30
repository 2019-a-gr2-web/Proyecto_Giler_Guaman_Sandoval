import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";
import {PlatosEntity} from "../Platos/platos.entity";

@Entity('TRESERVAS')
export class ReservasEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: 'varchar',
        length: 70,
        name: 'FRESERVA',
    })
    freserva: string;

    @Column({
        type: 'int',
        name: 'CANTIDADPERSONAS',
    })
    cantidad: number;

    @Column({
        type: 'varchar',
        length: 1,
        name: 'VENTANA',
    })
    ventana: string;

    @ManyToOne(type => UsuarioEntity, usuario => usuario.reservas)
    usuario: UsuarioEntity;

    @OneToMany(type => PlatosEntity, plato => plato.reserva)
    platos: PlatosEntity[];
}
