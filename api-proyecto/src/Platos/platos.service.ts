import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "../../dist/Usuario/usuario.entity";
import {Repository} from "typeorm";
import {PlatosEntity} from "./platos.entity";
import {ReservasEntity} from "../Reservas/reservas.entity";

@Injectable()
export class PlatosService{
    constructor(@InjectRepository(PlatosEntity)
                private readonly platoRepository: Repository<PlatosEntity>){

    }

    findPlatos():Promise<PlatosEntity[]>{
        return this.platoRepository.find();
    }

    findPlatosId(platoId : number):Promise<PlatosEntity[]>{
        return this.platoRepository.find({where: [{id: platoId}]});
    }
    /*findReserva(reservaId : number): Promise<PlatosEntity[]>{
        return this.platoRepository.find({relations:['reservas'], where: {id: reservaId}});
    }*/
    ingresarPlatos(plato : PlatosEntity): Promise<PlatosEntity>{
        const objectPlato = this.platoRepository.create(plato);
        return this.platoRepository.save(objectPlato);
    }

    findPlatosReserva(idReserva : number): Promise<PlatosEntity[]>{
        return this.platoRepository.find({ relations: ["reservas"]});
    }
}
