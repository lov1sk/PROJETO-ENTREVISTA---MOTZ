import { Button } from "@/components/Button/Button";
import { Page } from "@/components/Page";
import { Link } from "expo-router";

export default function IndexPage() {
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
        <Page.HeaderTitle>Inicio</Page.HeaderTitle>
        <Page.HeaderDescription>Pagina de inicio.</Page.HeaderDescription>

        <Link href={"/travel"} asChild>
          <Button title="Ir para FRETES" fullWidth />
        </Link>
      </Page.Header>
    </Page.Root>
  );
}
