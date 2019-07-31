import {Body, Controller, Get, Param, Post, Query, Res, Session} from "@nestjs/common";
import {PlatosService} from "./platos.service";

@Controller('/platos')
export class PlatosController{
    constructor(private readonly platosService: PlatosService) {
    }

    @Get('catalog')
    async conseguirVista(@Res() res){
        const lstPlatos = await this.platosService.findPlatos();
        res.render('home',{lstPlatos: lstPlatos});
    }

    @Get('crearPlatos/:idReserva')
    async getCrearPlatos(@Res() res, @Param('idReserva') idReserva : number){
        const lstPlatos = await this.platosService.findPlatos();
        const lstPlatosSeleccionados = await this.platosService.findPlatosReserva(idReserva);
        res.render('platos/crearPlatos', {lstPlatos: lstPlatos, idReserva: idReserva, lstPlatosSeleccionados:lstPlatosSeleccionados});
    }

}
