import { useGetTravels } from "@/api/queries/travelQueries";
import { FlatListEmptyComponent } from "@/components/FlatList/FlatListEmptyComponent";
import { FlatListSeparator } from "@/components/FlatList/FlatListSeparator";
import { LoadingSpinner } from "@/components/Loading/LoadingSpinner";
import { Page } from "@/components/Page";
import { TravelCard } from "@/components/TravelCard";
import { FlatList, Text, View } from "react-native";

export default function TravelsPage() {
  const { data: travels = [], isFetching, error } = useGetTravels();

  if (isFetching) {
    return <LoadingSpinner size={96} />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Page.Header
        style={{
          flexDirection: "column",
          marginTop: 32,
          paddingHorizontal: 24,
          gap: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 600, lineHeight: 26 }}>
          Viagens
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 400, lineHeight: 24 }}>
          Para saber mais sobre uma viagem, clique em uma opção abaixo.
        </Text>
      </Page.Header>

      {/** PAGE CONTENT */}
      <View style={{ flex: 1, margin: 16 }}>
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
      </View>
    </View>
  );
}
