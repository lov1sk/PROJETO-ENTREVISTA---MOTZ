import { TravelStatusEnum } from 'src/travel/enums/travel-status.enum';

export class GetTravelsResponseDto {
  id: string;
  number: number;
  contractNumber: string;
  status: TravelStatusEnum;
  totalValue: number;
  outstandingValue: number;
  deliveries: {
    clientId: string;
    clientName: string;
    origin: {
      city: string;
      address: string;
    };
    destiny: {
      city: string;
      address: string;
    };
  }[];
  products: {
    id: string;
    name: string;
    value: number;
  }[];
  shipperId: string;
  shipperName: string;

  constructor(data: GetTravelsResponseDto) {
    Object.assign(this, data);
  }
}
