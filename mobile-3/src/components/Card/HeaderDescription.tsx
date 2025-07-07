import { ReactNode } from "react";
import { Text, TextProps, View, ViewProps } from "react-native";

interface TravelCardHeaderDescriptionProps {
  children: ReactNode;
}
export function TravelCardHeaderDescription({
  children,
}: TravelCardHeaderDescriptionProps) {
  return (
    <Text
      style={{
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: -0.25,
        color: "#474747",
      }}
    >
      {children}
    </Text>
  );
}
// #474747
// font-family: Roboto;
// font-weight: 400;
// font-style: Regular;
// font-size: 14px;
// leading-trim: CAP_HEIGHT;
// line-height: 20px;
// letter-spacing: -0.25%;
