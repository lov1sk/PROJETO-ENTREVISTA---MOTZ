import { colors } from "@/theme/colors";
import { router, Stack } from "expo-router";
import { ArrowLeft, MoveLeft } from "lucide-react-native";
import { Text, View } from "react-native";

export default function TravelLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F4F6F8" }}>
      <View
        style={{
          flexDirection: "row",
          gap: 12,
          height: 72,
          paddingHorizontal: 24,
          paddingBottom: 14,
          alignItems: "flex-end",
          backgroundColor: colors.theme.orange,
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        }}
      >
        <MoveLeft
          color={colors.theme.white}
          strokeWidth={3}
          onPress={() => router.back()}
        />
        <Text
          style={{ color: colors.theme.white, fontWeight: 700, fontSize: 18 }}
        >
          MEUS FRETES
        </Text>
      </View>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Meus Fretes" }} />
        <Stack.Screen name="[id]" options={{ title: "Meus Fretes" }} />
      </Stack>
    </View>
  );
}
