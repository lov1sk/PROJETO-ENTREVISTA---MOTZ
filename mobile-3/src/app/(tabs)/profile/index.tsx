import { Page } from "@/components/Page";

export default function ProfilePage() {
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
        <Page.HeaderTitle>Cadastros</Page.HeaderTitle>
        <Page.HeaderDescription>
          Pagina para implementação de cadastros
        </Page.HeaderDescription>
      </Page.Header>
    </Page.Root>
  );
}
