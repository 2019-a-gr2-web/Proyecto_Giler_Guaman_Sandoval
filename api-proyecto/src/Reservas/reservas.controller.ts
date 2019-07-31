import {Body, Controller, Get, Param, Post, Res, Session} from "@nestjs/common";
import {AppService} from "../app.service";
import {ReservasService} from "./reservas.service";
import {ReservasEntity} from "./reservas.entity";
import {PlatosService} from "../Platos/platos.service";
import {PlatosEntity} from "../Platos/platos.entity";

@Controller('reservas')
export class ReservasController {
    constructor(private readonly reservasService: ReservasService, private readonly platosService: PlatosService) {
    }

    @Get('menuReservas')
     getMenuReservas(@Res() res, @Session() session) {
        if(session.nombre){
            res.render('reservas/menuReservas',{userId: session.userId});
        }
    }

    @Get('crearReservas/:userId')
    getCreacionReservas(@Res() res, @Param('userId') userId: number ){
        res.render('reservas/crearReservas', {userId: userId});
    }

    @Get('gestionReservas')
    async getGestionReservas(@Res() res, @Session() session){
        let userId = Number(session.userId);
        if(session.nombre){
            const lstReservas = await this.reservasService.conseguirReservas(userId);
            res.render('reservas/gestionReservas', {lstReservas : lstReservas});
        }
    }

    @Get('eliminarReservas/:reservaId')
     async getEliminarReservas(@Res() res, @Param('reservaId') reservaId : number){
        this.reservasService.deleteReserva(reservaId);
        const lstReservas = await this.reservasService.conseguirReservas(null);
        res.render('reservas/gestionReservas', {lstReservas : lstReservas});
    }

    @Post('crearReservas')
    async postCrearReservas(@Body() reserva : ReservasEntity, @Res() res){
        const reservaCreada = await this.reservasService.ingresarReserva(reserva);
        res.redirect('menuReservas');
    }

    @Post('crearReservaPlato')
    async postCrearReservaPlato(@Body() cuerpo, @Res() res){
        let platoResultado : PlatosEntity;
        let reservaResultado : ReservasEntity;
        const lstPlatos = await this.platosService.findPlatosId(cuerpo.id);
        lstPlatos.forEach((plato)=>{
            platoResultado = plato;
        });
        const lstReservas = await this.reservasService.findReservaId(cuerpo.reservaId);
        lstReservas.forEach((reserva)=>{
            reservaResultado = reserva;
        });
        platoResultado.reservas = [reservaResultado];
        this.platosService.ingresarPlatos(platoResultado);
        res.redirect('menuReservas');
    }

}
