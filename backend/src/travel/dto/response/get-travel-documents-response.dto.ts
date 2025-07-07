import { TravelDocumentEnum } from 'src/travel/enums/travel-document-type.enum';

export class GetTravelDocumentsResponseDto {
  id: string;
  number: number;
  contractNumber: string;
  documents: {
    id: string;
    name: string;
    type: TravelDocumentEnum;
    downloadUrl: string;
  }[];

  constructor(data: GetTravelDocumentsResponseDto) {
    Object.assign(this, data);
  }
}
