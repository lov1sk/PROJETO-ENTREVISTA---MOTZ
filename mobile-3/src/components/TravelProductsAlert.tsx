import { GetTravelDetailsResponse } from "@/types/travel/travel.type";
import { AlertComponent } from "./Alert";

interface TravelProductsAlertProps {
  visible: boolean;
  onClose: () => void;
  products?: GetTravelDetailsResponse["products"];
}
export function TravelProductsAlert({
  visible,
  onClose,
  products,
}: TravelProductsAlertProps) {
  return (
    <AlertComponent.Root visible={visible} onClose={onClose}>
      <AlertComponent.Section style={{ flexDirection: "column" }}>
        <AlertComponent.Title>Produtos dessa viagem</AlertComponent.Title>
        <AlertComponent.Description>
          {products?.reduce((acc, item, index) => acc + item.name + ", ", "")}
        </AlertComponent.Description>
      </AlertComponent.Section>
    </AlertComponent.Root>
  );
}
