import { Button } from "@/components/Button/Button";
import { Page } from "@/components/Page";

export default function HelpPage() {
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
        <Page.HeaderTitle>Ajuda</Page.HeaderTitle>
        <Page.HeaderDescription>
          Pagina para implementação do assistente do usuario (AJUDA).
        </Page.HeaderDescription>
      </Page.Header>
    </Page.Root>
  );
}
