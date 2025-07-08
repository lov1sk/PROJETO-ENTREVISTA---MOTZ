import { colors } from "@/theme/colors";
import { View } from "react-native";

interface TravelDeliverTimelineIndicatorProps {
  heightBetweenDots: number;
}
export function TravelDeliverTimelineIndicator({
  heightBetweenDots,
}: TravelDeliverTimelineIndicatorProps) {
  return (
    <View style={{ alignItems: "center", marginTop: 6 }}>
      <View
        style={{
          backgroundColor: colors.theme.orange,
          width: 8,
          height: 8,
          borderRadius: 4,
        }}
      />
      <View
        style={{
          backgroundColor: colors.theme.orange,
          width: 0,
          height: heightBetweenDots - 6, // menos 4 por ajuste manual
          borderWidth: 1,
          borderColor: colors.theme.orange,
        }}
      />
      <View
        style={{
          backgroundColor: colors.theme.orange,
          width: 8,
          height: 8,
          borderRadius: 4,
        }}
      />
    </View>
  );
}
