import {Module} from "@nestjs/common";
import { ReportController } from "./report.controller";
import { ReportService} from "./report.service";
import {ReportEntity} from "./report.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({  imports: [ TypeOrmModule.forFeature([ReportEntity], 'default')],
    controllers: [ReportController],
    providers: [ReportService],
    exports:[ReportService]
})
export class ReportModule {
    
}
