import BottomMenu from "@/components/BottomMenu";
import { queryClient } from "@/api/reactQuery";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function IndexLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <View style={{ flex: 1 }}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </View>
        <BottomMenu />
      </View>
    </QueryClientProvider>
  );
}
