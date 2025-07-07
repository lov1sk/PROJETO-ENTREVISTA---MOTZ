import { GetTravelDetailsResponse } from "@/types/travel/travel.type";
import { AlertComponent } from "./Alert";
import { toLocaleString } from "@/utils/numberUtils";

interface TravelMapAlertProps {
  visible: boolean;
  onClose: () => void;
  distance?: GetTravelDetailsResponse["totalDistanceInKm"];
}
export function TravelMapAlert({
  visible,
  onClose,
  distance,
}: TravelMapAlertProps) {
  return (
    <AlertComponent.Root visible={visible} onClose={onClose}>
      <AlertComponent.Section style={{ flexDirection: "column" }}>
        <AlertComponent.Title>Ver no mapa</AlertComponent.Title>
        <AlertComponent.Description>
          {`Distancia até o local: ${toLocaleString(distance, 2)} Km`}
        </AlertComponent.Description>
      </AlertComponent.Section>
    </AlertComponent.Root>
  );
}
