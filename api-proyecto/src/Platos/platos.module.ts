import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlatosEntity} from "./platos.entity";
import {PlatosController} from "./platos.controller";
import {PlatosService} from "./platos.service";

@Module({  imports: [ TypeOrmModule.forFeature([PlatosEntity], 'default')],
    controllers: [PlatosController],
    providers: [PlatosService],
    exports:[PlatosService]
})
export class PlatosModule {

}
