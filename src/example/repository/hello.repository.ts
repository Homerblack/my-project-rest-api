/*I want to know about this export */
/// this is a interface just like in java 
export const HELLO_REPOSITORY = 'HELLO_REPOSITORY';

export interface HelloRepository {
    getHelloMessage(): string;
}