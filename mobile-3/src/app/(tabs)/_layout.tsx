import { BottomTabItem } from "@/components/Tabs/BottomItem";
import { Tabs, useSegments } from "expo-router";
import { Home, Bell, User, Wallet } from "lucide-react-native";

export default function TabsLayout() {
  const segments = useSegments();
  const hiddenTabRoutes = ["travel"];
  const hideTab =
    hiddenTabRoutes.includes(segments.at(1)) && segments.length > 2;

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <BottomTabItem {...props} hideTab={hideTab} />}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "INÍCIO",
            tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="wallet/index"
          options={{
            tabBarLabel: "CARTEIRA",
            tabBarIcon: ({ color, size }) => (
              <Wallet color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="help/index"
          options={{
            tabBarLabel: "AJUDA",
            tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="notification/index"
          options={{
            tabBarLabel: "NOTIFICAÇÕES",
            tabBarIcon: ({ color, size }) => <Bell color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="profile/index"
          options={{
            tabBarLabel: "CADASTRO",
            tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="travel"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </>
  );
}
