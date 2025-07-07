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
  shipperId: string;
  shipperName: string;
}

export interface GetTravelDetailsResponse {
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
    downloadUrl: string;
    type: TravelDocumentEnum;
  }[];
  totalValue: number;
  totalDistanceInKm: number;
}

export interface GetTravelDocumentsResponse {
  id: string;
  number: number;
  contractNumber: string;
  documents: {
    id: string;
    name: string;
    downloadUrl: string;
    type: TravelDocumentEnum;
  }[];
}
