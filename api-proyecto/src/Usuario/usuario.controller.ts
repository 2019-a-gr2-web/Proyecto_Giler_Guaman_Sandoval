import {Body, Controller, Get, Param, Post, Query, Res, Session} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";

@Controller('/usuario')
export class UsuarioController{
    constructor(private readonly usuarioService: UsuarioService) {
    }

    @Get('registerUser')
    getCreateUser(@Res() res){
        res.render('registerUser');
    }

    @Get('login')
    getLogin(@Res() res){
        res.render('login');
    }

    @Post('login')
    async postLogin(@Res() res, @Session() session, @Body() user : UsuarioEntity){
        let rol: string;
        const lstUser = await this.usuarioService.findUser(user.username, user.password);
        if(lstUser.length !=0){
            lstUser.forEach((user) => {
                session.userId = user.id;
                session.nombre = user.nombre;
                session.rolUsuario = user.tipo;
                rol = user.tipo;
            });
            if(rol === 'Administrador'){
                res.redirect('/reservas/menuReservas');
            }else{
                res.redirect('/reservas/menuReservas');
            }
        }else {
            res.redirect('login');
        }
    }

    @Post('registerUser')
    async postRegisterUser(@Res() res, @Body() user : UsuarioEntity){
        const usuarioExito = await this.usuarioService.createUser(user);
        res.redirect('login');
    }

}
