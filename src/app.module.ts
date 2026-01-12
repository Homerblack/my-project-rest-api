import { Module } from '@nestjs/common';
import { HelloWorldModule } from './example/example.module';

@Module({
  imports: [HelloWorldModule],
})
export class AppModule {}