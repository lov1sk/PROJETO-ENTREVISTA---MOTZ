import { colors } from "@/theme/colors";
import { getCardAvatarBackgroundColor } from "@/utils/travel/getCardAvatarBackgroundColor";
import { ReactNode, useMemo } from "react";
import { Text, View } from "react-native";

interface TravelCardAvatarProps {
  avatarName: string;
}
export function TravelCardAvatar({ avatarName }: TravelCardAvatarProps) {
  const avatarBackgroundColor = useMemo(getCardAvatarBackgroundColor, []);
  return (
    <View
      style={{
        width: 48,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        backgroundColor: avatarBackgroundColor,
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
