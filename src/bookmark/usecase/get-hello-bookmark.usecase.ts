import { Inject, Injectable } from '@nestjs/common';
import type { BookmarkRepository } from '../repository/bookmark.repository';

/// where ever you see Injectable it is same as service in java 
@Injectable()
export class GetHelloBookmarkUseCase {
  constructor(
    @Inject('BookmarkRepository')
    private readonly bookmarkRepository: BookmarkRepository,
  ) {}

  async handle(): Promise<string> {
    return this.bookmarkRepository.getHello();
  }
}