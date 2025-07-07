import { Page } from "@/components/Page";
import { Text } from "react-native";

export default function ProfilePage() {
  return (
    <Page.Root>
      <Page.Header style={{ marginTop: 60, marginHorizontal: 24 }}>
        <Text>Cadastros</Text>
      </Page.Header>
    </Page.Root>
  );
}
