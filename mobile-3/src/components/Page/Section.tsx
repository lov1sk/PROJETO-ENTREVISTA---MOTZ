import { View, ViewProps } from "react-native";

interface PageSectionProps extends ViewProps {}
export function PageSection({ children, ...props }: PageSectionProps) {
  return <View {...props}>{children}</View>;
}
