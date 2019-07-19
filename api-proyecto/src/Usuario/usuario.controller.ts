import {Body, Controller, Get, Param, Post, Query, Res, Session} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";

@Controller('/usuario')
export class UsuarioController{
    constructor(private readonly _usuarioService: UsuarioService) {

    }

    @Post('login')
    async loginPostUsuario(
        @Body() body,
        @Session() session,
        @Res() res
    ){
        const arregloUsuarios = await this._usuarioService.validarUserPassLogin(body.username, body.password);
        const usuarioActivo = arregloUsuarios.length === 0 ? 0 : 1;
        if(usuarioActivo === 1){
            res.redirect('/proyecto/home');
        }else{
            res.redirect('/proyecto/login');
        }

    }
}
