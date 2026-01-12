/* this is how we import in node */

import { Inject } from '@nestjs/common';
import { HELLO_REPOSITORY } from '../repository/hello.repository';
import type { HelloRepository } from '../repository/hello.repository';

// This is a program to say hello world 

//this is a constructor just like java here we use export for some reason and readonly is a type script in build 
export class SayHelloWorld{
    constructor(
        @Inject(HELLO_REPOSITORY)
        private readonly helloRepository: HelloRepository,
    ){}

    execute(): string {
        return this.helloRepository.getHelloMessage();
    }


}