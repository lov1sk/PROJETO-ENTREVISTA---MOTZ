import { GetTravelDocumentsResponse } from "@/types/travel/travel.type";
import { CardComponent } from "./Card";
import { TravelDocumentItem } from "./TravelDocumentItem";
import { View } from "react-native";
import { colors } from "@/theme/colors";

interface TravelDetailsDocumentsCardProps {
  travelDocuments: GetTravelDocumentsResponse;
}
export function TravelDetailsDocumentsCard({
  travelDocuments,
}: TravelDetailsDocumentsCardProps) {
  const documents = travelDocuments?.documents;
  return (
    <CardComponent.Root style={{ backgroundColor: colors.theme.white }}>
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
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 20,
          paddingHorizontal: 16,
          paddingBottom: 20,
        }}
      >
        {documents.map((i) => (
          <TravelDocumentItem item={i} key={i.id} />
        ))}
      </CardComponent.Section>
    </CardComponent.Root>
  );
}
