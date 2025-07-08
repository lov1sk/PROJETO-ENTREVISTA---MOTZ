import { useState } from "react";
import { TravelDeliverTimelineIndicator } from "./TravelDeliverTimelineIndicator";
import { Text, View } from "react-native";
import { Button } from "@/components/Button/Button";
import { TravelCardSection } from "../Section";
import { ChevronLeft, ChevronRight } from "lucide-react-native";

interface TravelDeliverTimelineProps {
  deliver: {
    clientId: string;
    clientName: string;
    origin: {
      city: string;
      address: string;
    };
    destinies: {
      city: string;
      address: string;
    }[];
  };
  handlePress: () => void;
}
export function TravelDeliverTimeline({
  deliver,
  handlePress,
}: TravelDeliverTimelineProps) {
  const [y1, setY1] = useState<number | null>(null);
  const [y2, setY2] = useState<number | null>(null);
  // destinies
  const firstDestiny = deliver?.destinies[0];
  const hasMoreThanOneDestiny = deliver?.destinies.length > 1;

  const height = y1 !== null && y2 !== null ? Math.abs(y2 - y1) : null;

  return (
    <TravelCardSection style={{ flex: 1, flexDirection: "row", gap: 8 }}>
      <TravelDeliverTimelineIndicator heightBetweenDots={height} />
      <View style={{ width: "100%", paddingRight: 16, gap: 20 }}>
        <View
          onLayout={(event) => {
            const layout = event.nativeEvent.layout;
            setY1(layout.y);
          }}
        >
          <Text
            style={{
              color: "#FF5402",
              letterSpacing: -0.25,
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Origem:
          </Text>
          <Text
            style={{
              marginTop: 6,
              color: "#373737",
              letterSpacing: -0.25,
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            {deliver.origin.city}
          </Text>
          <Text
            style={{
              color: "#373737",
              letterSpacing: -0.25,
              fontWeight: 400,
              fontSize: 16,
            }}
          >
            {deliver.origin.address}
          </Text>
        </View>
        <View
          onLayout={(event) => {
            const layout = event.nativeEvent.layout;
            setY2(layout.y);
          }}
        >
          <Text
            style={{
              color: "#FF5402",
              letterSpacing: -0.25,
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Destino:
          </Text>
          <Text
            style={{
              marginTop: 6,
              color: "#373737",
              letterSpacing: -0.25,
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            {firstDestiny.city}
          </Text>
          <Text
            style={{
              color: "#373737",
              letterSpacing: -0.25,
              fontWeight: 400,
              fontSize: 16,
            }}
          >
            {firstDestiny.address}
          </Text>
        </View>
        {hasMoreThanOneDestiny && (
          <Button
            title="Ver mais destinos"
            variant="text"
            style={{ alignSelf: "flex-end" }}
            startIcon={ChevronRight}
            onPress={handlePress}
          />
        )}
      </View>
    </TravelCardSection>
  );
}
