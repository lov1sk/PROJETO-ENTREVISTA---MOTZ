import { getColorsByTravelStatus } from "@/utils/travel/getColorsByTravelStatus";
import { GetTravelsResponseItem } from "@/types/travel/travel.type";
import { Text, View } from "react-native";
import { toMoney } from "@/utils/numberUtils";
import { colors } from "@/theme/colors";
import { getTravelStatusName } from "@/utils/travel/getTravelStatusNames";
import { TravelCardComponent } from "@/components/TravelCard/index";
import { Button } from "./Button/Button";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Link, router } from "expo-router";
import { Truck } from "lucide-react-native";
import { getIconByTravelStatus } from "@/utils/travel/getIconByTravelStatus";

interface TravelCardProps {
  item: GetTravelsResponseItem;
}
export function TravelCard({ item }: TravelCardProps) {
  const travelStatusName = getTravelStatusName(item.status);
  const Icon = getIconByTravelStatus(item.status);
  const { light: lightBackground, normal: normalBackground } =
    getColorsByTravelStatus(item.status);

  // delivers
  const firstDeliver = item.deliveries[0];
  const hasMoreThanOneDeliver = item.deliveries.length > 1;
  const moreDeliversQuantity = item.deliveries.length - 1;

  // products
  const firstProduct = item.products[0];
  const hasMoreThanOneProduct = item.products.length > 1;
  const moreProductsQuantity = item.products.length - 1;

  return (
    <TravelCardComponent.Root
      style={{ borderWidth: 1, borderColor: "#DCDFE3", borderRadius: 16 }}
    >
      {/** HEADER - OK */}
      <TravelCardComponent.Section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 8,
          paddingVertical: 16,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          backgroundColor: lightBackground,
        }}
      >
        <TravelCardComponent.Section
          style={{ display: "flex", flexDirection: "column", gap: 1 }}
        >
          {/** Header Title */}
          <TravelCardComponent.HeaderTitle>
            Viagem: {item.number}
          </TravelCardComponent.HeaderTitle>
          {/** Header SubTitle */}
          <TravelCardComponent.HeaderDescription>
            Contrato: {item.contractNumber}
          </TravelCardComponent.HeaderDescription>
        </TravelCardComponent.Section>

        {/** Header Badge */}
        <TravelCardComponent.Badge backgroundColor={normalBackground}>
          {/** Badge Description */}
          <TravelCardComponent.BadgeDescription>
            {travelStatusName}
          </TravelCardComponent.BadgeDescription>

          {/** Badge Icon */}
          <TravelCardComponent.Icon>
            <Icon size={14} color={colors.theme.white} strokeWidth={3} />
          </TravelCardComponent.Icon>
        </TravelCardComponent.Badge>
      </TravelCardComponent.Section>
      {/**
       * aqui tem que ter:
       * o numero
       * o contrato
       * o status
       */}

      {/** BODY */}
      <TravelCardComponent.Section
        style={{
          flex: 1,
          flexDirection: "column",
          gap: 8,
          paddingHorizontal: 18,
          paddingVertical: 20,
        }}
      >
        {/** BODY HEADER - OK */}
        <TravelCardComponent.Section
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TravelCardComponent.Section
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/** BODY AVATAR */}
            <TravelCardComponent.Section
              style={{
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              <TravelCardComponent.Avatar
                avatarName={firstDeliver.clientName}
              />

              {/** BODY Title */}
              <TravelCardComponent.BodyTitle>
                {firstDeliver.clientName}
              </TravelCardComponent.BodyTitle>
            </TravelCardComponent.Section>
            {hasMoreThanOneDeliver && (
              <View
                style={{
                  marginLeft: "auto",
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  borderRadius: 16,
                  backgroundColor: colors.theme.orange,
                }}
              >
                <Text
                  style={{
                    color: colors.theme.white,
                    letterSpacing: -0.25,
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  +{moreDeliversQuantity}
                </Text>
              </View>
            )}
          </TravelCardComponent.Section>
        </TravelCardComponent.Section>

        {/** BODY CONTENT */}
        <TravelCardComponent.Section
          style={{ flexDirection: "column", gap: 20 }}
        >
          {/** Travel origin */}
          <View>
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
                color: "#373737",
                letterSpacing: -0.25,
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              {firstDeliver.origin.city}
            </Text>
            <Text
              style={{
                color: "#373737",
                letterSpacing: -0.25,
                fontWeight: 400,
                fontSize: 16,
              }}
            >
              {firstDeliver.origin.address}
            </Text>
          </View>
          <View>
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
                color: "#373737",
                letterSpacing: -0.25,
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              {firstDeliver.destiny.city}
            </Text>
            <Text
              style={{
                color: "#373737",
                letterSpacing: -0.25,
                fontWeight: 400,
                fontSize: 16,
              }}
            >
              {firstDeliver.destiny.address}
            </Text>
          </View>
        </TravelCardComponent.Section>
        <Link href={`travel/${item.id}`} asChild>
          <Button
            title="Ver mais destinos"
            variant="text"
            style={{ alignSelf: "flex-end" }}
          />
        </Link>
      </TravelCardComponent.Section>
      {/**
       * aqui tem que ter
       * products
       * products[0] => primeiro produto
       * => nome do cliente
       * => origem
       * => destino
       */}

      {/** FOOTER */}
      {/**
       * aqui tem que ter
       * valor total da viagem
       * valor pendente
       * embarcador
       * products
       * product[0].name
       */}
      <TravelCardComponent.Section
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          backgroundColor: "#F5F5F5",
          padding: 16,
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        }}
      >
        {/** 1° Linha */}
        <TravelCardComponent.Section
          style={{ flexDirection: "column", width: "65%" }}
        >
          <TravelCardComponent.FooterTitle>
            Valor da viagem
          </TravelCardComponent.FooterTitle>

          <TravelCardComponent.FooterDescription>
            {toMoney(item.totalValue)}
          </TravelCardComponent.FooterDescription>
        </TravelCardComponent.Section>

        <TravelCardComponent.Section style={{ width: "35%" }}>
          <TravelCardComponent.ProductBadge
            productName={firstProduct.name}
            moreProductsQuantity={hasMoreThanOneProduct && moreProductsQuantity}
          />
        </TravelCardComponent.Section>

        {/** 2° Linha */}
        <TravelCardComponent.Section
          style={{ flexDirection: "column", width: "65%" }}
        >
          <TravelCardComponent.FooterTitle>
            Saldo pendente
          </TravelCardComponent.FooterTitle>

          <TravelCardComponent.FooterDescription>
            {toMoney(item.outstandingValue)}
          </TravelCardComponent.FooterDescription>
        </TravelCardComponent.Section>

        <TravelCardComponent.Section
          style={{ flexDirection: "column", width: "35%" }}
        >
          <TravelCardComponent.FooterTitle>
            Embarcador
          </TravelCardComponent.FooterTitle>

          <TravelCardComponent.FooterDescription>
            {item.shipperName}
          </TravelCardComponent.FooterDescription>
        </TravelCardComponent.Section>
      </TravelCardComponent.Section>
    </TravelCardComponent.Root>
  );
}
