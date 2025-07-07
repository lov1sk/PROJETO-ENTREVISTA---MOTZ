import { colors } from "@/theme/colors";
import { Pressable, PressableProps } from "react-native";

interface TravelCardRootProps extends PressableProps {}
export function TravelCardRoot({
  children,
  style,
  ...props
}: TravelCardRootProps) {
  return (
    <Pressable
      style={{
        backgroundColor: "white",
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
