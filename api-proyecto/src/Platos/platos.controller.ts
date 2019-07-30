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
}
