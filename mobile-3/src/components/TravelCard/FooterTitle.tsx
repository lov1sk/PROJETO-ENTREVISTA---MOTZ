import { ReactNode } from "react";
import { Text } from "react-native";

interface TravelCardFooterTitleProps {
  children: ReactNode;
}
export function TravelCardFooterTitle({
  children,
}: TravelCardFooterTitleProps) {
  return (
    <Text
      style={{
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: -0.25,
        color: "#373737",
      }}
    >
      {children}
    </Text>
  );
}
// font-family: Roboto;
// font-weight: 400;
// font-style: Regular;
// font-size: 14px;
// leading-trim: CAP_HEIGHT;
// line-height: 20px;
// letter-spacing: -0.25%;
// text-align: center;
// #373737
