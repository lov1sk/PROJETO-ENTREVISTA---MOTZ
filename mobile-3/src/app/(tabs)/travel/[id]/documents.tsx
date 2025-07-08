import { useGetTravelDocuments } from "@/api/queries/travelQueries";
import { CardComponent } from "@/components/Card";
import { LoadingSpinner } from "@/components/Loading/LoadingSpinner";
import { Page } from "@/components/Page";
import { TravelDetailsDocumentsCard } from "@/components/TravelDetailsDocumentsCard";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

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

  if (isFetching) {
    return <LoadingSpinner size={96} />;
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

      {error && <Text>Erro: {error.message}</Text>}

      <Page.Section style={{ marginTop: 30, paddingHorizontal: 24 }}>
        <TravelDetailsDocumentsCard travelDocuments={travelDocuments} />
      </Page.Section>
    </Page.Root>
  );
}
