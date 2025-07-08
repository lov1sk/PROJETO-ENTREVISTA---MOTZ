import { TravelDocumentEnum } from 'src/travel/enums/travel-document-type.enum';

export const DOCUMENTS_MOCK = [
  {
    id: 'document-1',
    deliverId: 'deliver-1',
    name: 'NF 1',
    storagePath: 'notas-fiscais/nota-1.pdf',
    type: TravelDocumentEnum.NF,
    downloadUrl: 'download.s3.com/signedUrl/nota-1.pdf',
  },
  {
    id: 'document-2',
    deliverId: 'deliver-2',
    name: 'NF 2',
    storagePath: 'notas-fiscais/nota-2.pdf',
    type: TravelDocumentEnum.NF,
    downloadUrl: 'download.s3.com/signedUrl/nota-2.pdf',
  },
  {
    id: 'document-3',
    deliverId: 'deliver-3',
    name: 'NF 3',
    storagePath: 'notas-fiscais/nota-3.pdf',
    type: TravelDocumentEnum.NF,
    downloadUrl: 'download.s3.com/signedUrl/nota-3.pdf',
  },
  {
    id: 'document-4',
    deliverId: 'deliver-3',
    name: 'NF 4',
    storagePath: 'notas-fiscais/nota-4.pdf',
    type: TravelDocumentEnum.NF,
    downloadUrl: 'download.s3.com/signedUrl/nota-4.pdf',
  },
  {
    id: 'document-5',
    deliverId: 'deliver-3',
    name: 'NF 5',
    storagePath: 'notas-fiscais/nota-5.pdf',
    type: TravelDocumentEnum.NF,
    downloadUrl: 'download.s3.com/signedUrl/nota-5.pdf',
  },
];
