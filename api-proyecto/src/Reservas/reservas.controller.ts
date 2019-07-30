import {Body, Controller, Get, Param, Post, Res, Session} from "@nestjs/common";
import {AppService} from "../app.service";
import {ReservasService} from "./reservas.service";
import {ReservasEntity} from "./reservas.entity";

@Controller('reservas')
export class ReservasController {
    constructor(private readonly reservasService: ReservasService) {
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
        if(session.nombre){
            const lstReservas = await this.reservasService.conseguirReservas();
            res.render('reservas/gestionReservas', {lstReservas : lstReservas});
        }
    }

    @Get('eliminarReservas/:reservaId')
     getEliminarReservas(@Res() res, @Param('reservaId') reservaId : number){
        this.reservasService.deleteReserva(reservaId);
        res.redirect('gestionReservas');
    }

    @Post('crearReservas')
    async postCrearReservas(@Body() reserva : ReservasEntity, @Res() res){
        const reservaCreada = await this.reservasService.ingresarReserva(reserva);
        res.redirect('menuReservas');
    }
}
