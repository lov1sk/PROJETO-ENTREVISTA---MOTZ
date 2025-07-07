import { Button } from "@/components/Button/Button";
import { Page } from "@/components/Page";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function IndexPage() {
  return (
    <Page.Root>
      <Page.Header style={{ marginTop: 60, marginHorizontal: 24 }}>
        <Text>Home Page</Text>
        <Link href={"/travel"} asChild>
          <Button title="Ir para meu fretes" fullWidth />
        </Link>
      </Page.Header>
    </Page.Root>
  );
}
