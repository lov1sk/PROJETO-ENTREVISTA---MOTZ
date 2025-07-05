import {
  TravelDocumentEnum,
  TravelStatusEnum,
} from "@/types/travel/travel.type";

export const getTravelDocumentName = (type: TravelDocumentEnum) => {
  const nameMap: Record<TravelDocumentEnum, string> = {
    [TravelDocumentEnum.CONTRACT]: "Contrato",
    [TravelDocumentEnum.CTE]: "CTE",
    [TravelDocumentEnum.NF]: "Nota Fiscal",
  };

  return nameMap[type] ?? "";
};
