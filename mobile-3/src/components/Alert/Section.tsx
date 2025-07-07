import { colors } from "@/theme/colors";
import { View, ViewProps } from "react-native";

interface AlertSectionProps extends ViewProps {}
export function AlertSection({ children, ...props }: AlertSectionProps) {
  return (
    <View style={{ flexDirection: "row", gap: 24 }}>
      <View
        style={{
          width: 6,
          height: "auto",
          backgroundColor: colors.theme.blue,
        }}
      />
      <View {...props}>{children}</View>
    </View>
  );
}
