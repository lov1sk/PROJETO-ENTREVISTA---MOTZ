import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Home, Wallet, Bell, User } from "lucide-react-native";
import { BottomTabImage } from "@/components/Tabs/BottomTabImage";
import { usePathname, useRouter } from "expo-router";
import { colors } from "@/theme/colors";
import { getRoutePath } from "@/utils/routeUtils";
import { BottomTabCentralIcon } from "./BottomCentralIcon";

const ICON_COLOR = "#FF6600";

interface BottomTabItemProps extends BottomTabBarProps {
  hideTab: boolean;
}
export function BottomTabItem({
  state,
  descriptors,
  navigation,
  hideTab,
}: BottomTabItemProps) {
  const pathname = usePathname();
  const routes = state.routes.filter((i) => i.name !== "travel");

  return (
    <View style={[hideTab ? { display: "none" } : {}, { zIndex: 1 }]}>
      <BottomTabImage />
      <View
        style={{
          flexDirection: "row",
          height: 90,
          paddingHorizontal: 12,
          alignItems: "center",
          justifyContent: "space-between",
          borderTopWidth: 0,
          position: "absolute",
          backgroundColor: "transparent",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        {routes.map((route, index) => {
          const routePath = getRoutePath(route.name);

          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          // Ícone central (Ajuda)
          if (route.name === "help/index") {
            return (
              <BottomTabCentralIcon
                label={label}
                onPress={onPress}
                pathname={pathname}
                route={route}
                routePath={routePath}
                key={index}
              />
            );
          }

          const IconComponent =
            route.name === "index"
              ? Home
              : route.name === "wallet/index"
              ? Wallet
              : route.name === "notification/index"
              ? Bell
              : User;

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={{
                // borderWidth: 1,
                // borderColor: "black",
                width: 72,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconComponent
                color={ICON_COLOR}
                size={30}
                strokeWidth={pathname === routePath ? 2.5 : 2}
              />
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 6,
                  fontSize: 8,
                  color:
                    pathname === routePath ? colors.theme.orange : "#333333",
                  fontWeight: pathname === routePath ? 700 : 500,
                  letterSpacing: -0.5,
                }}
              >
                {typeof label === "string" ? label : null}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
