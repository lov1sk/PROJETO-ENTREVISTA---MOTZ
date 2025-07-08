import { colors } from "@/theme/colors";
import {
  GetTravelDetailsResponse,
  TravelDocumentEnum,
  TravelDocumentsItem,
} from "@/types/travel/travel.type";
import { getIconByTravelDocumentTypeStatus } from "@/utils/travel/getIconByTravelDocumentType";
import { getTravelDocumentName } from "@/utils/travel/getTravelDocumentName";
import { Text, View } from "react-native";

interface TravelDocumentItemProps {
  item: TravelDocumentsItem;
}
export function TravelDocumentItem({ item }: TravelDocumentItemProps) {
  const Icon = getIconByTravelDocumentTypeStatus(item.type);
  const documentName = getTravelDocumentName(item.type);
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.theme.orange,
        borderWidth: 1,
        borderColor: colors.theme.orange,
        borderRadius: 8,
        width: 90,
        height: 90,
      }}
    >
      <View style={{ padding: 6, gap: 4, alignItems: "center" }}>
        <Icon size={24} color={colors.theme.white} />
        <Text style={{ fontSize: 10, color: colors.theme.white }}>
          {documentName}
        </Text>
      </View>

      {/** FOOTER */}
      <View
        style={{
          width: "100%",
          backgroundColor: colors.theme.orangeDark,
          paddingHorizontal: 4,
          paddingVertical: 6,
          overflow: "hidden",
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}
      >
        <Text style={{ color: colors.theme.white }}>{item.name}</Text>
      </View>
    </View>
  );
}
