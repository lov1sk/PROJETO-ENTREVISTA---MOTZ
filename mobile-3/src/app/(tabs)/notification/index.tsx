import { Button } from "@/components/Button/Button";
import { Page } from "@/components/Page";
import { Link, router } from "expo-router";
import { Text, View } from "react-native";

export default function NotificationsPage() {
  return (
    <Page.Root>
      <Page.Header
        style={{
          flexDirection: "column",
          marginTop: 60,
          paddingHorizontal: 24,
          gap: 20,
        }}
      >
        <Page.HeaderTitle>Notificações</Page.HeaderTitle>
        <Page.HeaderDescription>
          Pagina para implementação de notificações
        </Page.HeaderDescription>
      </Page.Header>
    </Page.Root>
  );
}
