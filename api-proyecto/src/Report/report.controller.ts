import {Body, Controller, Get, Param, Post, Query, Res, Session} from "@nestjs/common";
import {ReportService} from "./report.service";

@Controller('/flutter')
export class ReportController{
    constructor(private readonly reportService: ReportService) {
    }

    @Get('report')
    async getCreateUser(@Res() res){
        const lstReport = await this.reportService.getReport();
        res.send({array : lstReport});
    }

    @Post('user')
    validateUser(@Res() res, @Body('username') username: string){
        if(username === 'mgiler'){
            res.send({confirmation : 'OK'});
        }
    }

}
