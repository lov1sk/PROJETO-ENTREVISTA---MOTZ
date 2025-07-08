import { colors } from "@/theme/colors";
import { Pressable, PressableProps, View, ViewProps } from "react-native";

interface TravelCardRootProps extends ViewProps {}
export function TravelCardRoot({
  children,
  style,
  ...props
}: TravelCardRootProps) {
  return (
    <View
      style={[
        {
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "#DCDFE3",
          borderRadius: 16,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
