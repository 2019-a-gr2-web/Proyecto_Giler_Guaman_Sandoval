import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ReportEntity} from "./report.entity";

@Injectable()
export class ReportService{
    constructor(@InjectRepository(ReportEntity)
                private readonly reportRepository: Repository<ReportEntity>){

    }

    getReport(): Promise<ReportEntity[]>{
        return this.reportRepository.find();
    }
}
