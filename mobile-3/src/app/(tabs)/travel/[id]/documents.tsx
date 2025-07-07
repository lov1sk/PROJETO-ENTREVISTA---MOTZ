import { useGetTravelDocuments } from "@/api/queries/travelQueries";
import { CardComponent } from "@/components/Card";
import { LoadingSpinner } from "@/components/Loading/LoadingSpinner";
import { Page } from "@/components/Page";
import { TravelDocumentCard } from "@/components/TravelDocumentCard";
import { colors } from "@/theme/colors";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

interface TravelDocumentParamsProps {
  id?: string;
}
export default function TravelDocuments() {
  const params = useLocalSearchParams() as TravelDocumentParamsProps;
  const {
    data: travelDocuments,
    isFetching,
    error,
  } = useGetTravelDocuments({ id: params?.id });

  const documents = travelDocuments?.documents;

  if (isFetching) {
    return <LoadingSpinner size={96} />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <Page.Root>
      <Page.Header style={{ marginTop: 32, paddingHorizontal: 24 }}>
        <Text
          style={{
            fontSize: 20,
            lineHeight: 26,
            fontWeight: 600,
            color: "#474747",
          }}
        >
          Documentos da viagem
        </Text>
      </Page.Header>
      <Page.Section style={{ paddingHorizontal: 24 }}>
        <CardComponent.Root>
          <CardComponent.Section
            style={{ paddingVertical: 20, paddingHorizontal: 16 }}
          >
            <CardComponent.HeaderTitle>
              Viagem: {travelDocuments.number}
            </CardComponent.HeaderTitle>
            <CardComponent.HeaderDescription>
              Contrato: {travelDocuments.contractNumber}
            </CardComponent.HeaderDescription>
          </CardComponent.Section>
          <CardComponent.Section
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 20,
              paddingHorizontal: 16,
              paddingBottom: 20,
            }}
          >
            {documents.map((i) => (
              <TravelDocumentCard item={i} key={i.id} />
            ))}
          </CardComponent.Section>
        </CardComponent.Root>
      </Page.Section>
    </Page.Root>
  );
}
