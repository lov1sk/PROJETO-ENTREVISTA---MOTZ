import { colors } from "@/theme/colors";
import { ReactNode } from "react";
import { Text, View } from "react-native";

interface TravelCardAvatarProps {
  avatarName: string;
}
export function TravelCardAvatar({ avatarName }: TravelCardAvatarProps) {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 14,
        backgroundColor: "#22A06B",
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: 0,
          textAlignVertical: "center",
          textAlign: "center",
          color: colors.theme.white,
        }}
      >
        {avatarName[0]}
      </Text>
    </View>
  );
}
// font-family: Roboto;
// font-weight: 400;
// font-style: Regular;
// font-size: 16px;
// leading-trim: NONE;
// line-height: 100%;
// letter-spacing: 0%;
