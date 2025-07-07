import { queryClient } from "@/api/reactQuery";
import { QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
}
