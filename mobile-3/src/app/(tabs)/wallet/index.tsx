import { Page } from "@/components/Page";

export default function WalletPage() {
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
        <Page.HeaderTitle>Carteira</Page.HeaderTitle>
        <Page.HeaderDescription>
          Pagina para implementação de carteira.
        </Page.HeaderDescription>
      </Page.Header>
    </Page.Root>
  );
}
