import { AlertComponent } from "./Alert";

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
