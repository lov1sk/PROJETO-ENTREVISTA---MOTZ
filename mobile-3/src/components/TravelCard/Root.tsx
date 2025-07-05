import { View, ViewProps } from "react-native";

interface TravelCardRootProps extends ViewProps {}
export function TravelCardRoot({ children, ...props }: TravelCardRootProps) {
  return <View {...props}>{children}</View>;
}
