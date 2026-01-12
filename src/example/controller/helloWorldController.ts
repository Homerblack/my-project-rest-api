import { Controller, Get} from "@nestjs/common";
import {SayHelloWorld} from '../usecase/helloWorld.usecase'

@Controller('/')
export class HelloWorldController{

    constructor(private readonly sayHelloWorld: SayHelloWorld){}

    @Get('hello')
    sayhello(){
        return this.sayHelloWorld.execute();
    }


}