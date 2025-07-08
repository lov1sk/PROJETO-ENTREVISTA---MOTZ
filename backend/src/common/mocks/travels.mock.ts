import { SHIPPERS_MOCK } from 'src/common/mocks/shipper.mock';
import { CLIENT_MOCK } from 'src/common/mocks/client.mock';
import { PRODUCTS_MOCK } from 'src/common/mocks/product.mock';
import { DOCUMENTS_MOCK } from 'src/common/mocks/travel-deliver-documents.mock';
import { TravelStatusEnum } from '../../travel/enums/travel-status.enum';
import { TRAVEL_DELIVER_ORIGIN_MOCK } from './travel-deliver-origin.mock';
import { TRAVEL_DELIVER_DESTINIES_MOCK } from './travel-deliver-destinies.mock';
import { TRAVEL_DELIVER_PRODUCTS_MOCK } from './travel-deliver-products.mock';

export const TRAVELS_MOCK = [
  {
    id: 'travel-1',
    number: 1,
    contractNumber: '1234-a',
    status: TravelStatusEnum.IN_PROGRESS,
    shipperId: SHIPPERS_MOCK[0].id,
    shipper: SHIPPERS_MOCK[0],
    helpersQuantity: 1,
    delivers: [
      {
        id: 'deliver-1',
        travelId: 'travel-1',
        clientId: CLIENT_MOCK[0].id,
        client: CLIENT_MOCK[0],
        originId: TRAVEL_DELIVER_ORIGIN_MOCK.find(
          (i) => i.deliverId === 'deliver-1',
        )!.id,
        origin: TRAVEL_DELIVER_ORIGIN_MOCK.find(
          (i) => i.deliverId === 'deliver-1',
        )!,
        destinies: TRAVEL_DELIVER_DESTINIES_MOCK.filter(
          (i) => i.deliverId === 'deliver-1',
        ),
        documents: DOCUMENTS_MOCK.filter((i) => i.deliverId === 'deliver-1'),
        products: PRODUCTS_MOCK.filter((p) =>
          TRAVEL_DELIVER_PRODUCTS_MOCK.filter(
            (dp) => dp.deliverId === 'deliver-1',
          ).find((dp) => dp.productId === p.id),
        ),
      },
      {
        id: 'deliver-2',
        travelId: 'travel-1',
        clientId: CLIENT_MOCK[1].id,
        client: CLIENT_MOCK[1],
        originId: TRAVEL_DELIVER_ORIGIN_MOCK.find(
          (i) => i.deliverId === 'deliver-2',
        )!.id,
        origin: TRAVEL_DELIVER_ORIGIN_MOCK.find(
          (i) => i.deliverId === 'deliver-2',
        )!,
        destinies: TRAVEL_DELIVER_DESTINIES_MOCK.filter(
          (i) => i.deliverId === 'deliver-2',
        ),
        documents: DOCUMENTS_MOCK.filter((i) => i.deliverId === 'deliver-2'),
        products: PRODUCTS_MOCK.filter((p) =>
          TRAVEL_DELIVER_PRODUCTS_MOCK.filter(
            (dp) => dp.deliverId === 'deliver-2',
          ).find((dp) => dp.productId === p.id),
        ),
      },
    ],
  },
  {
    id: 'travel-2',
    number: 2,
    contractNumber: '1234-b',
    status: TravelStatusEnum.SCHEDULED,
    shipperId: SHIPPERS_MOCK[0].id,
    shipper: SHIPPERS_MOCK[0],
    helpersQuantity: 0,
    delivers: [
      {
        id: 'deliver-3',
        travelId: 'travel-2',
        clientId: CLIENT_MOCK[1].id,
        client: CLIENT_MOCK[1],
        originId: TRAVEL_DELIVER_ORIGIN_MOCK.find(
          (i) => i.deliverId === 'deliver-3',
        )!.id,
        origin: TRAVEL_DELIVER_ORIGIN_MOCK.find(
          (i) => i.deliverId === 'deliver-3',
        )!,
        destinies: TRAVEL_DELIVER_DESTINIES_MOCK.filter(
          (i) => i.deliverId === 'deliver-3',
        ),
        documents: DOCUMENTS_MOCK.filter((i) => i.deliverId === 'deliver-3'),
        products: PRODUCTS_MOCK.filter((p) =>
          TRAVEL_DELIVER_PRODUCTS_MOCK.filter(
            (dp) => dp.deliverId === 'deliver-3',
          ).find((dp) => dp.productId === p.id),
        ),
      },
    ],
  },
];
