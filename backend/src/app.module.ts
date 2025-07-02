import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TravelModule } from './travel/travel.module';

@Module({
  imports: [TravelModule],
  controllers: [AppController],
})
export class AppModule {}
