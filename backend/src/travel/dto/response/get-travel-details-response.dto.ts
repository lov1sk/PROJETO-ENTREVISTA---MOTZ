import { TravelDocumentEnum } from 'src/travel/enums/travel-document-type.enum';
import { TravelStatusEnum } from 'src/travel/enums/travel-status.enum';

export class GetTravelDetailsResponseDto {
  id: string;
  number: number;
  contractNumber: string;
  status: TravelStatusEnum;
  deliveries: {
    clientId: string;
    clientName: string;
    origin: {
      city: string;
      address: string;
    };
    destinies: {
      city: string;
      address: string;
    }[];
  }[];
  products: {
    id: string;
    name: string;
    value: number;
  }[];
  documents: {
    id: string;
    name: string;
    type: TravelDocumentEnum;
    downloadUrl: string;
  }[];
  totalValue: number;
  totalDistanceInKm: number;
  helpersQuantity: number;

  constructor(data: GetTravelDetailsResponseDto) {
    Object.assign(this, data);
  }
}
