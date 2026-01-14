import { Inject, Injectable } from "@nestjs/common"
import type  { RealStateRepository } from "../repository/real-state.repository";

@Injectable()// This also can be read as service by module 
export class RealStateUseCase{

    //This is a costructor to get the RealStateRepository
    constructor(@Inject('RealStateRepository')
        private readonly repository: RealStateRepository,
    ){}
    
    async getResult(filters: {
        prefectureCode?: number;
        year?: number;
        type?: number;
    }){
        return this.repository.filterData(filters);
    }



}

