import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ReservasEntity} from "./reservas.entity";
import {UsuarioEntity} from "../../dist/Usuario/usuario.entity";
import {PlatosEntity} from "../Platos/platos.entity";

@Injectable()
export class ReservasService {
    constructor(@InjectRepository(ReservasEntity)
                private readonly reservasRepository: Repository<ReservasEntity>){
    }

    conseguirReservas(userId: number):Promise<ReservasEntity[]>{
        if(userId === undefined){
            return this.reservasRepository.find();
        }else{
            return this.reservasRepository.find({relations: ['usuario'], where: {usuario : {id: userId}}});
        }
    }

    ingresarReserva(reserva : ReservasEntity): Promise<ReservasEntity>{
        const objectReserva = this.reservasRepository.create(reserva);
        return this.reservasRepository.save(objectReserva);
    }

    deleteReserva(reservaId: number){
        this.reservasRepository.delete(reservaId);
    }

    findReservaId(reservaId : number):Promise<ReservasEntity[]>{
        return this.reservasRepository.find({where: [{id: reservaId}]});
    }

}
