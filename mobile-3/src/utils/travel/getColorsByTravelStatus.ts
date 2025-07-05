import { colors } from "@/theme/colors";
import { TravelStatusEnum } from "@/types/travel/travel.type";

export const getColorsByTravelStatus = (currentStatus?: TravelStatusEnum) => {
  const colorMap: Record<TravelStatusEnum, { normal: string; light: string }> =
    {
      [TravelStatusEnum.PRE_SCHEDULING]: {
        normal: colors.states.preScheduling,
        light: colors.states.preSchedulingLight,
      },
      [TravelStatusEnum.PRE_SCHEDULE]: {
        normal: colors.states.processingSchedule,
        light: colors.states.processingScheduleLight,
      },
      [TravelStatusEnum.SCHEDULED]: {
        normal: colors.states.scheduled,
        light: colors.states.scheduledLight,
      },
      [TravelStatusEnum.IN_PROGRESS]: {
        normal: colors.states.inProgress,
        light: colors.states.inProgressLight,
      },
      [TravelStatusEnum.PROCESSING_DISCHARGE]: {
        normal: colors.states.processingDischarge,
        light: colors.states.processingDischargeLight,
      },
      [TravelStatusEnum.AWAITING_DISCHARGE]: {
        normal: colors.states.awaitingDischarge,
        light: colors.states.awaitingDischargeLight,
      },
      [TravelStatusEnum.UNDER_ANALISYS]: {
        normal: colors.states.underAnalisys,
        light: colors.states.underAnalisysLight,
      },
      [TravelStatusEnum.CANCELED]: {
        normal: colors.states.canceled,
        light: colors.states.canceledLight,
      },
      [TravelStatusEnum.DONE]: {
        normal: colors.states.done,
        light: colors.states.doneLight,
      },
    };

  return (
    colorMap[currentStatus] ?? {
      normal: colors.theme.gray,
      light: colors.theme.white,
    }
  );
};
