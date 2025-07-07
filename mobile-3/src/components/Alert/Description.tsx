import { Text, TextProps } from "react-native";

interface AlertDescriptionProps extends TextProps {}
export function AlertDescription({
  children,
  ...props
}: AlertDescriptionProps) {
  return (
    <Text
      style={{
        color: "#373737",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: -0.25,
      }}
      {...props}
    >
      {children}
    </Text>
  );
}
