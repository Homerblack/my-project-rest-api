import { HelloRepository } from './hello.repository';

export class HelloRepositoryImpl implements HelloRepository{

    getHelloMessage(): string{
        return 'Hello from Repository'
    }
}