import {Column, Double, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity('Report')
export class ReportEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: 'date',
        name: 'Fecha',
    })
    fecha: Date;

    @Column({
        type: 'varchar',
        length: 70,
        name: 'Cod_Grupo_Producto',
    })
    codGrupoProducto: string;

    @Column({
        type: 'varchar',
        length: 70,
        name: 'Nombre_Grupo',
    })
    nombreGrupo: string;

    @Column({
        type: 'varchar',
        length: 70,
        name: 'Key_Producto',
    })
    keyProducto: number;

    @Column({
        type: 'varchar',
        length: 70,
        name: 'Producto_Nombre',
    })
    productoNombre: string;

    @Column({
        type: 'double',
        name: 'Total_linea',
    })
    totalLinea: Number;

    @Column({
        type: 'double',
        name: 'Total_IVA',
    })
    totalIVA: Number;

    @Column({
        type: 'integer',
        name: 'Year',
    })
    year: Number;

    @Column({
        type: 'integer',
        name: 'Month',
    })
    month: Number;

    @Column({
        type: 'integer',
        name: 'Day',
    })
    day: Number

    @Column({
        type: 'varchar',
        length: 70,
        name: 'Idinc',
    })
    idinc: string;
}
