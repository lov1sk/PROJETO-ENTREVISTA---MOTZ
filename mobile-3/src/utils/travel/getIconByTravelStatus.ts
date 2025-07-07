import { colors } from "@/theme/colors";
import { TravelStatusEnum } from "@/types/travel/travel.type";
import {
  CalendarCheck,
  Check,
  CircleDollarSign,
  Clock,
  Cog,
  FileSearch2,
  FileText,
  LucideIcon,
  Truck,
  X,
} from "lucide-react-native";

export const getIconByTravelStatus = (currentStatus?: TravelStatusEnum) => {
  const iconMap: Record<TravelStatusEnum, LucideIcon> = {
    [TravelStatusEnum.PRE_SCHEDULING]: FileText,
    [TravelStatusEnum.PROCESSING_SCHEDULE]: Cog,
    [TravelStatusEnum.SCHEDULED]: CalendarCheck,
    [TravelStatusEnum.IN_PROGRESS]: Truck,
    [TravelStatusEnum.PROCESSING_DISCHARGE]: CircleDollarSign,
    [TravelStatusEnum.AWAITING_DISCHARGE]: Clock,
    [TravelStatusEnum.UNDER_ANALISYS]: FileSearch2,
    [TravelStatusEnum.CANCELED]: X,
    [TravelStatusEnum.DONE]: Check,
  };

  return iconMap[currentStatus] ?? X;
};
