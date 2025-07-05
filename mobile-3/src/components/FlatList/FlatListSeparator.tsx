import { View } from "react-native";

interface FlatListSeparatorProps {
  orientation?: "vertical" | "horizontal";
  gap?: number;
}
export function FlatListSeparator({
  orientation = "vertical",
  gap = 16,
}: FlatListSeparatorProps) {
  return (
    <View
      style={{
        width: orientation === "horizontal" ? gap : 0,
        height: orientation === "vertical" ? gap : 0,
      }}
    />
  );
}
