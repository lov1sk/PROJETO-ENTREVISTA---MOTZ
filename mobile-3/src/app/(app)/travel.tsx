import { useGetTravels } from "@/api/queries/travelQueries";
import { FlatListSeparator } from "@/components/FlatListSeparator";
import { TravelCard } from "@/components/TravelCard";
import { colors } from "@/theme/colors";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function TravelsPage() {
  const { data: travels = [], isFetching, error } = useGetTravels();
  return (
    <View style={styles.container}>
      {/** HEADER */}
      <View style={styles.header}>
        <Text
          style={{
            color: colors.theme.white,
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          MEUS FRETES
        </Text>
      </View>

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

      {/** CARD */}
      <View style={{ flex: 1, margin: 16 }}>
        <FlatList
          data={travels}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TravelCard item={item} />}
          ItemSeparatorComponent={() => <FlatListSeparator />}
        />
        {error && <Text>{error.message}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#000",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#ff5111",
    paddingHorizontal: 24,
    height: 60,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  mainText: {
    fontSize: 42,
    fontWeight: 700,
  },
});
