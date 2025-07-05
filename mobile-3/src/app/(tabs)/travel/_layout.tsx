import { colors } from "@/theme/colors";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function TravelLayout() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F4F6F8",
      }}
    >
      <Stack
        screenOptions={{
          headerTintColor: colors.theme.white,
          headerTitleStyle: {
            fontWeight: 700,
          },

          headerBackground: () => (
            <View
              style={{
                flex: 1,
                backgroundColor: colors.theme.orange,
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
              }}
            />
          ),
        }}
      >
        <Stack.Screen name="index" options={{ title: "Meus Fretes" }} />
        <Stack.Screen name="[id]" options={{ title: "Meus Fretes" }} />
      </Stack>
    </View>
  );
}
