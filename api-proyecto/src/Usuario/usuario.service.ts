import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "../../dist/Usuario/usuario.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsuarioService{
    constructor(@InjectRepository(UsuarioEntity)
                private readonly _usuarioRepository: Repository<UsuarioEntity>,){

    }

    validarUserPassLogin(username : string, password : string):Promise<UsuarioEntity[]>{
        return this._usuarioRepository.find(
            {select: ['nombre'],
                where: [{ 'username': username}, {'password': password}]}
        );
    }
}
