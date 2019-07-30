import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ReservasEntity} from "./reservas.entity";
import {ReservasController} from "./reservas.controller";
import {ReservasService} from "./reservas.service";

@Module({  imports: [ TypeOrmModule.forFeature([ReservasEntity], 'default')],
    controllers: [ReservasController],
    providers: [ReservasService],
    exports:[ReservasService]
})
export class ReservasModule {

}
