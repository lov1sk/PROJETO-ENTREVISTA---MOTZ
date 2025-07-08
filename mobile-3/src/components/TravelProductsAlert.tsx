import { TravelProductsItem } from "@/types/travel/travel.type";
import { AlertComponent } from "./Alert";

interface TravelProductsAlertProps {
  visible: boolean;
  onClose: () => void;
  products?: TravelProductsItem[];
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
          {products?.reduce((acc, item, index) => {
            const isLastProduct = products?.length - 1 === index;

            return acc + item.name + (isLastProduct ? "." : ", ");
          }, "")}
        </AlertComponent.Description>
      </AlertComponent.Section>
    </AlertComponent.Root>
  );
}
