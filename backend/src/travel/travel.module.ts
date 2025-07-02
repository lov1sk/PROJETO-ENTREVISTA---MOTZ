import { Module } from '@nestjs/common';
import { TravelController } from './travel.controller';
import { TravelService } from './travel.service';

@Module({
  providers: [TravelService],
  controllers: [TravelController],
  exports: [TravelService],
})
export class TravelModule {}
