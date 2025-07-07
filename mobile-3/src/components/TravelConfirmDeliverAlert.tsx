import { GetTravelDetailsResponse } from "@/types/travel/travel.type";
import { AlertComponent } from "./Alert";
import { toLocaleString } from "@/utils/numberUtils";

interface TravelConfirmDeliverAlertProps {
  visible: boolean;
  onClose: () => void;
}
export function TravelConfirmDeliverAlert({
  visible,
  onClose,
}: TravelConfirmDeliverAlertProps) {
  return (
    <AlertComponent.Root visible={visible} onClose={onClose}>
      <AlertComponent.Section style={{ flexDirection: "column" }}>
        <AlertComponent.Title>Confirmação</AlertComponent.Title>
        <AlertComponent.Description>
          Entrega confirmada!
        </AlertComponent.Description>
      </AlertComponent.Section>
    </AlertComponent.Root>
  );
}
