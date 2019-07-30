import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "../../dist/Usuario/usuario.entity";
import {Repository} from "typeorm";
import {PlatosEntity} from "./platos.entity";

@Injectable()
export class PlatosService{
    constructor(@InjectRepository(PlatosEntity)
                private readonly platoRepository: Repository<PlatosEntity>){

    }

    findPlatos():Promise<PlatosEntity[]>{
        return this.platoRepository.find();
    }
}
