import { Info } from "lucide-react-native";
import { Text, TextProps, View } from "react-native";

interface AlertTitleProps extends TextProps {}
export function AlertTitle({ children, ...props }: AlertTitleProps) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
      <Info size={24} color={"#003653"} />
      <Text
        style={{
          color: "#003653",
          fontWeight: 600,
          fontSize: 20,
          lineHeight: 26,
          letterSpacing: -0.5,
        }}
        {...props}
      >
        {children}
      </Text>
    </View>
  );
}
