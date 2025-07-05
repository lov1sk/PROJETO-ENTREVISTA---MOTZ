import BottomMenu from "@/components/Tabs/BottomMenu";
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
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
        {/* <BottomMenu /> */}
      </View>
    </QueryClientProvider>
  );
}
