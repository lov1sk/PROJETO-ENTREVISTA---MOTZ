import { useGetTravels } from "@/api/queries/travelQueries";
import { BottomTabImage } from "@/components/Tabs/BottomTabImage";
import { FlatListEmptyComponent } from "@/components/FlatList/FlatListEmptyComponent";
import { FlatListSeparator } from "@/components/FlatList/FlatListSeparator";
import { LoadingSpinner } from "@/components/Loading/LoadingSpinner";
import { Page } from "@/components/Page";
import { TravelCard } from "@/components/TravelCard";
import { FlatList, Text } from "react-native";

export default function TravelsPage() {
  const { data: travels = [], isFetching, error } = useGetTravels();

  if (isFetching) {
    return <LoadingSpinner size={96} />;
  }

  return (
    <Page.Root>
      <Page.Header
        style={{
          flexDirection: "column",
          marginTop: 32,
          paddingHorizontal: 24,
          gap: 20,
        }}
      >
        <Page.HeaderTitle>Viagens</Page.HeaderTitle>
        <Page.HeaderDescription>
          Para saber mais sobre uma viagem, clique em uma opção abaixo.
        </Page.HeaderDescription>
      </Page.Header>

      {error && <Text>Erro: {error.message}</Text>}

      <Page.Section style={{ flex: 1, margin: 16, marginBottom: 100 }}>
        <FlatList
          data={travels}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TravelCard item={item} />}
          ItemSeparatorComponent={() => <FlatListSeparator />}
          ListEmptyComponent={() => (
            <FlatListEmptyComponent emptyMessage="Nenhuma viagem encontrada!" />
          )}
        />
        {error && <Text>{error.message}</Text>}
      </Page.Section>
    </Page.Root>
  );
}
