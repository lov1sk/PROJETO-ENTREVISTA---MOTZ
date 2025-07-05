import { ReactNode } from "react";
import { Text } from "react-native";

interface TravelCardFooterDescriptionProps {
  children: ReactNode;
}
export function TravelCardFooterDescription({
  children,
}: TravelCardFooterDescriptionProps) {
  return (
    <Text
      style={{
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 24,
        letterSpacing: -0.25,
        color: "#5F5F5F",
      }}
    >
      {children}
    </Text>
  );
}
// font-family: Roboto;
// font-weight: 700;
// font-style: Bold;
// font-size: 16px;
// leading-trim: CAP_HEIGHT;
// line-height: 24px;
// letter-spacing: -0.25%;
// text-align: center;
// background: var(--text-body020, #5F5F5F);
