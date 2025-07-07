import { View, ViewProps } from "react-native";

interface TravelCardSectionProps extends ViewProps {}
export function TravelCardSection({
  children,
  ...props
}: TravelCardSectionProps) {
  return <View {...props}>{children}</View>;
}
