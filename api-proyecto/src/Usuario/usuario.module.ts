import {Module} from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({  imports: [ TypeOrmModule.forFeature([UsuarioEntity], 'default')],
    controllers: [UsuarioController],
    providers: [UsuarioService],
    exports:[UsuarioService]
})
export class UsuarioModule {
    
}
