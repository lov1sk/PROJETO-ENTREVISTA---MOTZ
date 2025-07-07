import { Tabs, useSegments } from "expo-router";
import { Home, Bell, User, Wallet } from "lucide-react-native";

export default function TabsLayout() {
  const segments = useSegments();
  const hiddenTabRoutes = ["travel"];
  const hideTabs =
    hiddenTabRoutes.includes(segments.at(1)) && segments.length > 2;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: hideTabs
          ? { display: "none" }
          : {
              backgroundColor: "#fff",
              borderTopWidth: 0,
              height: 60,
            },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="wallet/index"
        options={{
          tabBarLabel: "Carteira",
          tabBarIcon: ({ color, size }) => <Wallet color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="help/index"
        options={{
          tabBarLabel: "Ajuda",
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="notification/index"
        options={{
          tabBarLabel: "Notificações",
          tabBarIcon: ({ color, size }) => <Bell color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          tabBarLabel: "Cadastro",
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
  );
}
