import { TravelStatusEnum } from "@/types/travel/travel.type";

export const getTravelStatusName = (currentStatus?: TravelStatusEnum) => {
  const nameMap: Record<TravelStatusEnum, string> = {
    [TravelStatusEnum.PRE_SCHEDULING]: "Pré Agendamento",
    [TravelStatusEnum.PRE_SCHEDULE]: "",
    [TravelStatusEnum.SCHEDULED]: "Agendado",
    [TravelStatusEnum.IN_PROGRESS]: "Em Andamento",
    [TravelStatusEnum.PROCESSING_DISCHARGE]: "Processando quitação",
    [TravelStatusEnum.AWAITING_DISCHARGE]: "Aguardando quitação",
    [TravelStatusEnum.UNDER_ANALISYS]: "Quitação em andamento",
    [TravelStatusEnum.CANCELED]: "Cancelado",
    [TravelStatusEnum.DONE]: "Concluido",
  };

  return nameMap[currentStatus] ?? "";
};
