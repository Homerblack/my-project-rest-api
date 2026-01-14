import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Query } from "@nestjs/common";
import { RealStateUseCase } from "../usecase/real-state.usecase";
import { RealStateDto } from "../dto/real-state.dto";
//RealStateUseCase
//RealStateDto

@Controller('api/v1/townPlanning/estateTransaction')
export class RealStateController{

    //constructor for calling usecase
    constructor(private readonly realStateUseCase: RealStateUseCase){}


    @Get('bar')
    // injecting query via dto 
    async getBar(@Query() query: RealStateDto)
    {
        return this.realStateUseCase.getResult(query)
        };
    }