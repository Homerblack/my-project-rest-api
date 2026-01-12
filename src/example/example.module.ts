import {Module} from '@nestjs/common';
import {HelloWorldController} from './controller/helloWorldController';
import {SayHelloWorld} from './usecase/helloWorld.usecase';
import {HelloRepositoryImpl} from './repository/hello.repository.impl'

@Module({
    controllers:[HelloWorldController],
    providers: [{
        provide: 'HELLO_REPOSITORY',
        useClass: HelloRepositoryImpl,
        },
        SayHelloWorld
    ],
})
export class HelloWorldModule {}