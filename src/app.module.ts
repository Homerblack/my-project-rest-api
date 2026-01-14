import { Module } from '@nestjs/common';
import { RealStateModule } from './real-state/realstate.module';
import { BookmarkModule } from './bookmark/bookmark.module';


@Module({
  imports: [RealStateModule, BookmarkModule],
})
export class AppModule {}
