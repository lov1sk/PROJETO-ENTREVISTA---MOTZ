import { View, ViewProps } from "react-native";

interface PageHeaderProps extends ViewProps {}
export function PageHeader({ children, ...props }: PageHeaderProps) {
  return <View {...props}>{children}</View>;
}
