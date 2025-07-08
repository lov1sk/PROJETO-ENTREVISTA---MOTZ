import { colors } from "@/theme/colors";
import { Image, Text, TouchableOpacity, View } from "react-native";
import HelpAvatar from "@/assets/HelpAvatar.png";

interface BottomTabCentralIconProps {
  pathname: string;
  routePath: string;
  route: any;
  onPress: () => void;
  label:
    | string
    | ((props: {
        focused: boolean;
        color: string;
        children: string;
      }) => React.ReactNode);
}
export function BottomTabCentralIcon({
  onPress,
  pathname,
  route,
  routePath,
  label,
}: BottomTabCentralIconProps) {
  return (
    <TouchableOpacity
      key={route.key}
      onPress={onPress}
      style={{
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        top: -20,
      }}
    >
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: 36,
          overflow: "hidden", // Garante que a imagem cortada fique redonda
          borderWidth: 2,
          borderColor:
            pathname === routePath
              ? colors.theme.orangeDark
              : colors.theme.white,
          backgroundColor: "#333333",
        }}
      >
        <Image
          source={HelpAvatar}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
          }}
        />
      </View>

      <Text
        style={{
          marginTop: 4,
          fontSize: 9,
          color: pathname === routePath ? colors.theme.orange : "#333333",
          fontWeight: pathname === routePath ? "700" : "500",
        }}
      >
        {typeof label === "string" ? label : null}
      </Text>
    </TouchableOpacity>
  );
}
