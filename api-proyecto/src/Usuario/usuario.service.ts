import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "../../dist/Usuario/usuario.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsuarioService{
    constructor(@InjectRepository(UsuarioEntity)
                private readonly usuarioRepository: Repository<UsuarioEntity>,){

    }

    createUser(user : UsuarioEntity):Promise<UsuarioEntity>{
        const objectUser = this.usuarioRepository.create(user);
        return this.usuarioRepository.save(objectUser);
    }

    deleteUser(userId: number){
        this.usuarioRepository.delete(userId);
    }

    updateUser(user: UsuarioEntity){
        this.usuarioRepository.update({id: user.id}, {cedula: user.cedula, nombre: user.nombre, telefono: user.telefono, direccion: user.direccion});
    }

    findUser(username : string, password : string){
        return this.usuarioRepository.find({where: [{username: username, password: password}]});
    }
}
