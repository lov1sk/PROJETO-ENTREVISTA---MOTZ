import { useGetTravels } from "@/api/queries/travelQueries";
import { FlatListEmptyComponent } from "@/components/FlatList/FlatListEmptyComponent";
import { FlatListSeparator } from "@/components/FlatList/FlatListSeparator";
import { LoadingSpinner } from "@/components/Loading/LoadingSpinner";
import { TravelCard } from "@/components/TravelCard";
import { FlatList, Text, View } from "react-native";

export default function TravelsPage() {
  const { data: travels = [], isFetching, error } = useGetTravels();
  // const travels = [];
  // const isFetching = false;
  // const error = null;
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/** PAGE CONTAINER ACIMA*/}

      {/** PAGE HEADER */}
      <View
        style={{
          marginTop: 32,
          paddingHorizontal: 24,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 600, lineHeight: 26 }}>
          Viagens
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 400, lineHeight: 24 }}>
          Para saber mais sobre uma viagem, clique em uma opção abaixo.
        </Text>
      </View>

      {/** PAGE CONTENT */}

      {/** PAGE LOADER */}
      {isFetching && <LoadingSpinner size={96} />}

      {/** PAGE CONTENT */}
      {!isFetching && (
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
      )}
    </View>
  );
}
