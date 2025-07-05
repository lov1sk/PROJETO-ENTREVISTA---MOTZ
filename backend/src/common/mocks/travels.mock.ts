import { SHIPPERS_MOCK } from 'src/common/mocks/shipper.mock';
import { CLIENT_MOCK } from 'src/common/mocks/client.mock';
import { PRODUCTS_MOCK } from 'src/common/mocks/product.mock';
import { DOCUMENTS_MOCK } from 'src/common/mocks/document.mock';
import { TravelStatusEnum } from '../../travel/enums/travel-status.enum';

export const TRAVELS_MOCK = [
  {
    id: 'travel-1',
    number: 1,
    contractNumber: '1234-a',
    status: TravelStatusEnum.DONE,
    shipperId: SHIPPERS_MOCK[0].id,
    shipper: SHIPPERS_MOCK[0],
    delivers: [
      {
        id: 'deliver-1',
        travelId: 'travel-1',
        clientId: CLIENT_MOCK[0].id,
        client: CLIENT_MOCK[0],
        originDestiny: {
          id: 'origin-destiny-1',
          deliverId: 'deliver-1',
          originLatitude: -23.6815167, // MINHA CASA
          originLongitude: -46.7925427, // MINHA CASA
          originZipcode: '05886010',
          originAddress: 'Rua Acomayo,180',
          originCity: 'São Paulo',
          destinationLatitude: -23.4216542, // AEROPORTO GUARULHOS
          destinationLongitude: -46.4793528, // AEROPORTO GUARULHOS
          destinationZipcode: '07190100',
          destinationAddress: 'SP-019, S/N - Aeroporto',
          destinationCity: 'Guarulhos',
        },
        documents: [DOCUMENTS_MOCK[0]],
        products: [PRODUCTS_MOCK[0], PRODUCTS_MOCK[1]],
      },
      {
        id: 'deliver-2',
        travelId: 'travel-1',
        clientId: CLIENT_MOCK[1].id,
        client: CLIENT_MOCK[1],
        originDestiny: {
          id: 'origin-destiny-2',
          deliverId: 'deliver-2',
          originLatitude: -23.6815167, // MINHA CASA
          originLongitude: -46.7925427, // MINHA CASA
          originZipcode: '05886010',
          originAddress: 'Rua Acomayo,180',
          originCity: 'São Paulo',
          destinationLatitude: -23.6830495, // C/C Interlados
          destinationLongitude: -46.691677, // C/C Interlados
          destinationZipcode: '04795100',
          destinationAddress: 'Av. das Nações Unidas, 23343 - Vila Almeida',
          destinationCity: 'São Paulo',
        },
        documents: [DOCUMENTS_MOCK[1]],
        products: [PRODUCTS_MOCK[2]],
      },
    ],
  },
  {
    id: 'travel-2',
    number: 2,
    contractNumber: '1234-b',
    status: TravelStatusEnum.DONE,
    shipperId: SHIPPERS_MOCK[0].id,
    shipper: SHIPPERS_MOCK[0],
    delivers: [
      {
        id: 'deliver-3',
        travelId: 'travel-2',
        clientId: CLIENT_MOCK[1].id,
        client: CLIENT_MOCK[1],
        originDestiny: {
          id: 'origin-destiny-3',
          deliverId: 'deliver-3',
          originLatitude: -23.6815167, // MINHA CASA
          originLongitude: -46.7925427, // MINHA CASA
          originZipcode: '05886010',
          originAddress: 'Rua Acomayo,180',
          originCity: 'São Paulo',
          destinationLatitude: -23.5913793, // VOTORANTIN CIMENTOS
          destinationLongitude: -47.4379295, // VOTORANTIN CIMENTOS
          destinationZipcode: '18117725',
          destinationAddress: 'Av. Comendador Pereira Inácio, 16',
          destinationCity: 'São Paulo',
        },
        documents: [DOCUMENTS_MOCK[2]],
        products: [PRODUCTS_MOCK[3], PRODUCTS_MOCK[4]],
      },
    ],
  },
];
