import { Controller, Get , Res} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/proyecto')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('login')
  getHello(@Res() res){
    res.render('login');
  }

  @Get('home')
  getHome(@Res() res){
    res.render('home');
  }

  @Get('registerUsuario')
    getrRegisterUsuario(@Res() res){
      res.render('registerUser');
  }
}
