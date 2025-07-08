import { Text, TextProps } from "react-native";

interface PageHeaderTitleProps extends TextProps {}
export function PageHeaderTitle({
  children,
  style,
  ...props
}: PageHeaderTitleProps) {
  return (
    <Text
      style={[{ fontSize: 20, fontWeight: 600, lineHeight: 26 }, style]}
      {...props}
    >
      {children}
    </Text>
  );
}
