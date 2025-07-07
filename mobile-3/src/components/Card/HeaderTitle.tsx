import { ReactNode } from "react";
import { Text, TextProps, View, ViewProps } from "react-native";

interface TravelCardHeaderTitleProps {
  children: ReactNode;
}
export function TravelCardHeaderTitle({
  children,
}: TravelCardHeaderTitleProps) {
  return (
    <Text
      style={{
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 24,
        letterSpacing: -0.5,
        color: "#474747",
      }}
    >
      {children}
    </Text>
  );
}

// font-family: Roboto;
// font-weight: 600;
// font-style: SemiBold;
// font-size: 16px;
// leading-trim: CAP_HEIGHT;
// line-height: 24px;
// letter-spacing: -0.5%;
// #474747
