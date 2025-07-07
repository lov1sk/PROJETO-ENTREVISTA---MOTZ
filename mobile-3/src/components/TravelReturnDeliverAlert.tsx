import { GetTravelDetailsResponse } from "@/types/travel/travel.type";
import { AlertComponent } from "./Alert";

interface TravelReturnDeliverAlertProps {
  visible: boolean;
  onClose: () => void;
}
export function TravelReturnDeliverAlert({
  visible,
  onClose,
}: TravelReturnDeliverAlertProps) {
  return (
    <AlertComponent.Root visible={visible} onClose={onClose}>
      <AlertComponent.Section style={{ flexDirection: "column" }}>
        <AlertComponent.Title>Devolução</AlertComponent.Title>
        <AlertComponent.Description>
          Sinalização de devolução concluida!
        </AlertComponent.Description>
      </AlertComponent.Section>
    </AlertComponent.Root>
  );
}
