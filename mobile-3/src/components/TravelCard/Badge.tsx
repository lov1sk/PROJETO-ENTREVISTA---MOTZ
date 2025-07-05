import { ReactNode } from "react";
import { ColorValue, Text, TextProps, View, ViewProps } from "react-native";

interface TravelCardBadgeProps {
  backgroundColor: ColorValue;
  children: ReactNode;
}
export function TravelCardBadge({
  backgroundColor,
  children,
}: TravelCardBadgeProps) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        borderRadius: 16,
        backgroundColor,
        paddingHorizontal: 8,
        paddingVertical: 10,
      }}
    >
      {children}
    </View>
  );
}
