import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { TravelService } from './travel.service';
import { TravelStatusEnum } from './enums/travel-status.enum';
import { GetTravelsRequestDto } from './dto/request/get-travels-request.dto';

@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getTravels(@Query('status') status: TravelStatusEnum) {
    await new Promise((resolve) => setTimeout(() => resolve('OK'), 1000 * 3));
    return this.travelService.getTravels(new GetTravelsRequestDto({ status }));
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getTravelDetails(@Param('id') id: string) {
    await new Promise((resolve) => setTimeout(() => resolve('OK'), 1000 * 3));
    return this.travelService.getTravelDetails(id);
  }
}
