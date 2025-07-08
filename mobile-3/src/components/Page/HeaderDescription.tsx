import { Text, TextProps } from "react-native";

interface PageHeaderDescriptionProps extends TextProps {}
export function PageHeaderDescription({
  children,
  style,
  ...props
}: PageHeaderDescriptionProps) {
  return (
    <Text
      style={[{ fontSize: 16, fontWeight: 400, lineHeight: 24 }, style]}
      {...props}
    >
      {children}
    </Text>
  );
}
