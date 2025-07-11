import { Injectable, NotFoundException } from '@nestjs/common';
import { LocationUtils } from 'src/utils/location.utils';
import { NumberUtils } from 'src/utils/number.utils';
import { GetTravelsResponseDto } from './dto/response/get-travels-response.dto';
import { GetTravelsRequestDto } from './dto/request/get-travels-request.dto';
import { GetTravelDetailsResponseDto } from './dto/response/get-travel-details-response.dto';
import { TRAVELS_MOCK } from '../common/mocks/travels.mock';
import { GetTravelDocumentsResponseDto } from './dto/response/get-travel-documents-response.dto';

@Injectable()
export class TravelService {
  constructor() {}

  getTravels({ status }: GetTravelsRequestDto) {
    const response: GetTravelsResponseDto[] = [];

    for (const travel of TRAVELS_MOCK) {
      if (status && travel.status !== status) {
        continue;
      }
      const travelProducts: GetTravelsResponseDto['products'] =
        travel.delivers.flatMap((deliver) =>
          deliver.products.map((product) => ({
            id: product.id,
            name: product.name,
            value: product.value,
          })),
        );
      const travelDeliveries: GetTravelsResponseDto['deliveries'] =
        travel.delivers.map((deliver) => ({
          clientId: deliver.clientId,
          clientName: deliver.client.name,
          origin: {
            address: deliver.origin.address,
            city: deliver.origin.city,
          },
          destinies: deliver.destinies.map((i) => ({
            address: i.address,
            city: i.city,
          })),
        }));

      const { totalValue, outstandingValue } =
        this.getTravelTotalValues(travel);
      response.push(
        new GetTravelsResponseDto({
          id: travel.id,
          number: travel.number,
          contractNumber: travel.contractNumber,
          status: travel.status,
          shipperId: travel.shipperId,
          shipperName: travel.shipper.name,
          totalValue: totalValue,
          outstandingValue,
          products: travelProducts,
          deliveries: travelDeliveries,
        }),
      );
    }

    return response;
  }

  getTravelDetails(id: string) {
    const travel = TRAVELS_MOCK.find((i) => i.id === id);

    if (!travel) {
      throw new NotFoundException(`A Viagem: ${id} não foi encontrada`);
    }

    const { totalValue, totalDistanceInKm } = this.getTravelTotalValues(travel);

    const travelDeliveries: GetTravelDetailsResponseDto['deliveries'] =
      travel.delivers.map((deliver) => ({
        clientId: deliver.clientId,
        clientName: deliver.client.name,
        origin: {
          address: deliver.origin.address,
          city: deliver.origin.city,
        },
        destinies: deliver.destinies.map((i) => ({
          address: i.address,
          city: i.city,
        })),
      }));

    const travelProducts: GetTravelDetailsResponseDto['products'] =
      travel.delivers.flatMap((deliver) =>
        deliver.products.map((product) => ({
          id: product.id,
          name: product.name,
          value: product.value,
        })),
      );

    const travelDocuments: GetTravelDetailsResponseDto['documents'] =
      travel.delivers.flatMap((deliver) =>
        deliver.documents.map((document) => ({
          id: document.id,
          name: document.name,
          downloadUrl: document.downloadUrl,
          type: document.type,
        })),
      );

    return new GetTravelDetailsResponseDto({
      id: travel.id,
      number: travel.number,
      contractNumber: travel.contractNumber,
      status: travel.status,

      deliveries: travelDeliveries,
      products: travelProducts,
      documents: travelDocuments,

      totalValue,
      totalDistanceInKm,
      helpersQuantity: travel.helpersQuantity,
    });
  }

  getTravelDocuments(id: string) {
    const travel = TRAVELS_MOCK.find((i) => i.id === id);

    if (!travel) {
      throw new NotFoundException(`A Viagem: ${id} não foi encontrada`);
    }

    const documents = travel.delivers.flatMap((deliver) => deliver.documents);

    return new GetTravelDocumentsResponseDto({
      id: travel.id,
      number: travel.number,
      contractNumber: travel.contractNumber,
      documents,
    });
  }

  private getTravelTotalValues(travel: (typeof TRAVELS_MOCK)[0]) {
    let totalValue = 0;
    let totalDistanceInKm = 0;

    for (const deliver of travel.delivers) {
      totalValue += deliver.products.reduce((acc, item) => acc + item.value, 0);
      for (const destiny of deliver.destinies) {
        totalDistanceInKm += LocationUtils.getDistanceBetweenCoordinates(
          {
            latitude: deliver.origin.latitude,
            longitude: deliver.origin.longitude,
          },
          {
            latitude: destiny.latitude,
            longitude: destiny.longitude,
          },
        );
      }
    }

    return {
      totalValue: NumberUtils.nb2(totalValue),
      totalDistanceInKm: NumberUtils.nb2(totalDistanceInKm),
      outstandingValue: NumberUtils.nb2(totalValue * 0.2543),
    };
  }
}
