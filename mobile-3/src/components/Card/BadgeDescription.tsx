import { colors } from "@/theme/colors";
import { ReactNode } from "react";
import { Text } from "react-native";

interface TravelCardBadgeDescriptionProps {
  children: ReactNode;
}
export function TravelCardBadgeDescription({
  children,
}: TravelCardBadgeDescriptionProps) {
  return (
    <Text
      style={{
        color: colors.theme.white,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: -0.25,
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
// vertical-align: middle;
// #FFFFFF;
