import { Module } from "@nestjs/common";
import { RealStateController } from "./controller/real-state.controller";
import { RealStateUseCase } from "./usecase/real-state.usecase";
import { RealStateRepositoryImpl} from "./infrastructure/real-state.repository.impl"

//RealStateUseCase
//RealStateDto

@Module({
    controllers: [RealStateController],
    providers: [
        RealStateUseCase,
        {
           provide: 'RealStateRepository' ,
           useClass: RealStateRepositoryImpl,
        }
    ],
})
export class RealStateModule{}
