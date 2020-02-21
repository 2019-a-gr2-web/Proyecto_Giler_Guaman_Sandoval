import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ReportModule} from "./Report/report.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ReportEntity} from "./Report/report.entity";

@Module({
  imports: [ ReportModule,
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mysql',
      host: '167.71.121.6',
      port: 3306,
      username: 'user1',
      password: 'Mgiler7295+',
      database: 'BI',
      entities: [ReportEntity],
      synchronize: false,
      //logging: false,
      //insecureAuth : true,
      dropSchema: false
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
