import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ReservasEntity} from "./reservas.entity";
import {UsuarioEntity} from "../../dist/Usuario/usuario.entity";

@Injectable()
export class ReservasService {
    constructor(@InjectRepository(ReservasEntity)
                private readonly reservasRepository: Repository<ReservasEntity>){
    }

    conseguirReservas():Promise<ReservasEntity[]>{
        return this.reservasRepository.find();
    }

    ingresarReserva(reserva : ReservasEntity): Promise<ReservasEntity>{
        const objectReserva = this.reservasRepository.create(reserva);
        return this.reservasRepository.save(objectReserva);
    }

    deleteReserva(reservaId: number){
        this.reservasRepository.delete(reservaId);
    }

}
