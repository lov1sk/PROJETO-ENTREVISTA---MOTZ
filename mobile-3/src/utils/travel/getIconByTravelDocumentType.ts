import { colors } from "@/theme/colors";
import {
  TravelDocumentEnum,
  TravelStatusEnum,
} from "@/types/travel/travel.type";
import {
  CalendarCheck,
  Check,
  CircleDollarSign,
  Clock,
  Cog,
  File,
  FilePenLine,
  FileSearch2,
  FileText,
  LucideIcon,
  Truck,
  X,
} from "lucide-react-native";

export const getIconByTravelDocumentTypeStatus = (type: TravelDocumentEnum) => {
  const iconMap: Record<TravelDocumentEnum, LucideIcon> = {
    [TravelDocumentEnum.CONTRACT]: FileText,
    [TravelDocumentEnum.CTE]: File,
    [TravelDocumentEnum.NF]: FilePenLine,
  };

  return iconMap[type] ?? X;
};
