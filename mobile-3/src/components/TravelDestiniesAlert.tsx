import {
  GetTravelDetailsResponse,
  TravelDeliverItem,
} from "@/types/travel/travel.type";
import { AlertComponent } from "./Alert";
import { toLocaleString } from "@/utils/numberUtils";
import { View } from "react-native";

interface TravelDestiniesAlertProps {
  visible: boolean;
  onClose: () => void;
  deliver?: TravelDeliverItem;
}
export function TravelDestiniesAlert({
  visible,
  onClose,
  deliver,
}: TravelDestiniesAlertProps) {
  const destinies = deliver?.destinies;
  return (
    <AlertComponent.Root visible={visible} onClose={onClose}>
      <AlertComponent.Section style={{ flexDirection: "column" }}>
        <AlertComponent.Title>Destinos desse cliente</AlertComponent.Title>
        {destinies?.map((i, index) => (
          <View style={{ flexDirection: "column", marginTop: 16 }} key={index}>
            <AlertComponent.Description style={{ fontWeight: 700 }}>
              {i.city}
            </AlertComponent.Description>
            <AlertComponent.Description>{i.address}</AlertComponent.Description>
          </View>
        ))}
      </AlertComponent.Section>
    </AlertComponent.Root>
  );
}
