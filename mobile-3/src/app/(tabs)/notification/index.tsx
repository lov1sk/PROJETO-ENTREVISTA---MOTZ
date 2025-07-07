import { Button } from "@/components/Button/Button";
import { Page } from "@/components/Page";
import { Link, router } from "expo-router";
import { Text, View } from "react-native";

export default function NotificationsPage() {
  return (
    <Page.Root>
      <Page.Header style={{ marginTop: 60, marginHorizontal: 24 }}>
        <Text>Notificações</Text>
      </Page.Header>
    </Page.Root>
  );
}
