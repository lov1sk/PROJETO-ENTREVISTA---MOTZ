import { colors } from "@/theme/colors";
import { getCardAvatarBackgroundColor } from "@/utils/travel/getCardAvatarBackgroundColor";
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
        borderRadius: 12,
        backgroundColor: getCardAvatarBackgroundColor(),
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
