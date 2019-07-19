import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('Usuario')
export class UsuarioEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: 'varchar',
        length: 10,
        name: 'Cedula',
    })
    cedula: string;

    @Column({
        type: 'varchar',
        length: 70,
        name: 'Nombre',
    })
    nombre: string;

    @Column({
        type: 'varchar',
        length: 50,
        name: 'Username',
    })
    username: string;

    @Column({
        type: 'varchar',
        length: 50,
        name: 'Password',
    })
    password: string;

    @Column({
        type: 'varchar',
        length: 50,
        name: 'Telefono',
    })
    telefono: number;

    @Column({
        type: 'varchar',
        length: 20,
        name: 'Direccion',
    })
    direccion: string;

    @Column({
        type: 'varchar',
        length: 20,
        name: 'Tipo',
    })
    tipo: 'Administrador'|'Cliente';

}
