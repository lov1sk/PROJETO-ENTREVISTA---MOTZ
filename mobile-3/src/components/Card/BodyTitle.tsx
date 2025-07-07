import { ReactNode } from "react";
import { Text } from "react-native";

interface TravelCardBodyTitleProps {
  children: ReactNode;
}
export function TravelCardBodyTitle({ children }: TravelCardBodyTitleProps) {
  return (
    <Text style={{ fontSize: 20, fontWeight: 600, color: "#474747" }}>
      {children}
    </Text>
  );
}
