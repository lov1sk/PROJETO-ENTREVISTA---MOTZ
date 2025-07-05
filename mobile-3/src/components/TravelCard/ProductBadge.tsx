import { colors } from "@/theme/colors";
import { ReactNode } from "react";
import { ColorValue, Text, TextProps, View, ViewProps } from "react-native";

interface TravelCardProductBadgeProps {
  productName: string;
  moreProductsQuantity?: number;
}
export function TravelCardProductBadge({
  productName,
  moreProductsQuantity,
}: TravelCardProductBadgeProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
        borderRadius: 16,
        backgroundColor: "#373737",
        paddingLeft: 8,
        paddingRight: 4,
        paddingVertical: 4,
      }}
    >
      <Text
        style={{ fontSize: 14, color: colors.theme.white, fontWeight: 700 }}
      >
        {productName}
      </Text>
      {moreProductsQuantity && (
        <View
          style={{
            backgroundColor: colors.theme.white,
            paddingHorizontal: 6,
            paddingVertical: 2,
            borderRadius: 16,
          }}
        >
          <Text style={{ color: "#373737", fontWeight: 700, fontSize: 14 }}>
            +{moreProductsQuantity}
          </Text>
        </View>
      )}
    </View>
  );
}

// width: 91;
// height: 22;
// angle: 0 deg;
// opacity: 1;
// border-radius: 10000px;
// gap: 4;
// padding-top: spacing/spacing025;
// padding-right: spacing/spacing025;
// padding-bottom: spacing/spacing025;
// padding-left: spacing/spacing100;
// #373737
