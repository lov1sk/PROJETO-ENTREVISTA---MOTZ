import { colors } from "@/theme/colors";
import { Pressable, PressableProps } from "react-native";

interface TravelCardPressableProps extends PressableProps {}
export function TravelCardPressable({
  children,
  style,
  ...props
}: TravelCardPressableProps) {
  return (
    <Pressable
      style={{
        borderWidth: 1,
        borderColor: "#DCDFE3",
        borderRadius: 16,
      }}
      {...props}
    >
      {children}
    </Pressable>
  );
}
