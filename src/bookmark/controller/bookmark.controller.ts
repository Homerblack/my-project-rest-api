import { Controller, Get } from '@nestjs/common';
import { GetHelloBookmarkUseCase } from '../usecase/get-hello-bookmark.usecase';
import { GetConstantBookmarkUseCase } from '../usecase/get-constant-bookmark.usecase';


//This is my practice program to run hello world for practice
@Controller('bookmark')
export class BookmarkController {
  constructor(
    private readonly getHelloBookmarkUseCase: GetHelloBookmarkUseCase,
    private readonly getConstantBookmarkUseCase: GetConstantBookmarkUseCase,
  ) {}

  @Get('hello')
  async hello() {
    return this.getHelloBookmarkUseCase.handle();
  }

  @Get('constant')
  async constant() {
    return this.getConstantBookmarkUseCase.handle();
  }
}