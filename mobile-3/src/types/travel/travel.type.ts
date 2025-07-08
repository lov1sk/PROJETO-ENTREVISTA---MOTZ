export enum TravelStatusEnum {
  PRE_SCHEDULING = "pre-scheduling",
  PROCESSING_SCHEDULE = "processing-schedule",
  SCHEDULED = "scheduled",
  IN_PROGRESS = "in-progress",
  PROCESSING_DISCHARGE = "processing-discharge",
  AWAITING_DISCHARGE = "awaiting-discharge",
  UNDER_ANALISYS = "under-analisys",
  CANCELED = "canceled",
  DONE = "done",
}

export enum TravelDocumentEnum {
  CONTRACT = "contract",
  NF = "invoice",
  CTE = "cte",
}

export interface GetTravelsResponseItem {
  id: string;
  number: number;
  contractNumber: string;
  status: TravelStatusEnum;
  totalValue: number;
  outstandingValue: number;
  deliveries: TravelDeliverItem[];
  products: TravelProductsItem[];
  shipperId: string;
  shipperName: string;
}

export interface GetTravelDetailsResponse {
  id: string;
  number: number;
  contractNumber: string;
  status: TravelStatusEnum;
  deliveries: TravelDeliverItem[];
  products: TravelProductsItem[];
  documents: TravelDocumentsItem[];
  totalValue: number;
  totalDistanceInKm: number;
  helpersQuantity: number;
}

export interface GetTravelDocumentsResponse {
  id: string;
  number: number;
  contractNumber: string;
  documents: TravelDocumentsItem[];
}

export interface TravelDeliverItem {
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
}

export interface TravelProductsItem {
  id: string;
  name: string;
  value: number;
}

export interface TravelDocumentsItem {
  id: string;
  name: string;
  downloadUrl: string;
  type: TravelDocumentEnum;
}
