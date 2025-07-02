import { TravelStatusEnum } from 'src/travel/enums/travel-status.enum';

export class GetTravelsRequestDto {
  status?: TravelStatusEnum;

  constructor(data: GetTravelsRequestDto) {
    Object.assign(this, data);
  }
}
