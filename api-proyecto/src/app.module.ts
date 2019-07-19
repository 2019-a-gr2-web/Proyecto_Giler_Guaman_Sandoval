import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsuarioModule} from "./Usuario/usuario.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./Usuario/usuario.entity";

@Module({
  imports: [UsuarioModule,
    TypeOrmModule.forRoot({
      name: 'default', //Nombre por defecto del TYPEORM
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'proyectoWeb',
      entities: [UsuarioEntity],
      synchronize: true,
      insecureAuth : true,
      dropSchema: true
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
