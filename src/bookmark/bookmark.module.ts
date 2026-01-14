import { Module } from '@nestjs/common';
import { BookmarkController } from './controller/bookmark.controller';
import { GetHelloBookmarkUseCase } from './usecase/get-hello-bookmark.usecase';
import { GetConstantBookmarkUseCase } from './usecase/get-constant-bookmark.usecase';
import { BookmarkRepositoryImpl } from './infrastructure/bookmark.repository.impl';

@Module({
  controllers: [BookmarkController],
  providers: [
    GetHelloBookmarkUseCase,
    GetConstantBookmarkUseCase,
    {
      provide: 'BookmarkRepository',
      useClass: BookmarkRepositoryImpl,
    },
  ],
})
export class BookmarkModule {}