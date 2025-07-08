import { colors } from "@/theme/colors";
import { router, Stack } from "expo-router";
import { ArrowLeft, MoveLeft } from "lucide-react-native";
import { Text, View } from "react-native";

export default function TravelLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F4F6F8" }}>
      <Stack
        screenOptions={() => ({
          headerTintColor: colors.theme.white,
          headerTitleStyle: {
            fontWeight: 700,
          },
          headerTitleAlign: "left",
          headerLeft: () => (
            <View style={{ marginRight: 12 }}>
              <MoveLeft
                color={colors.theme.white}
                strokeWidth={3}
                onPress={() => router.back()}
              />
            </View>
          ),
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
        })}
      >
        <Stack.Screen
          name="index"
          options={{ title: "MEUS FRETES", headerTitleAlign: "left" }}
        />
        <Stack.Screen
          name="[id]/index"
          options={{ title: "MEUS FRETES", headerTitleAlign: "left" }}
        />
        <Stack.Screen
          name="[id]/documents"
          options={{ title: "MEUS FRETES", headerTitleAlign: "left" }}
        />
      </Stack>
    </View>
  );
}
