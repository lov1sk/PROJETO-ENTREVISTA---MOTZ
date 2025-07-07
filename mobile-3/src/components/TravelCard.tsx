import { getColorsByTravelStatus } from "@/utils/travel/getColorsByTravelStatus";
import { GetTravelsResponseItem } from "@/types/travel/travel.type";
import { Text, View } from "react-native";
import { toMoney } from "@/utils/numberUtils";
import { colors } from "@/theme/colors";
import { getTravelStatusName } from "@/utils/travel/getTravelStatusNames";
import { CardComponent } from "@/components/Card/index";
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

  // destinies
  const firstDestiny = firstDeliver?.destinies[0];
  const hasMoreThanOneDestiny =
    firstDeliver && firstDeliver?.destinies.length > 1;

  return (
    <CardComponent.Root onPress={() => router.navigate(`travel/${item.id}`)}>
      {/** HEADER - OK */}
      <CardComponent.Section
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
        <CardComponent.Section
          style={{ display: "flex", flexDirection: "column", gap: 1 }}
        >
          {/** Header Title */}
          <CardComponent.HeaderTitle>
            Viagem: {item.number}
          </CardComponent.HeaderTitle>
          {/** Header SubTitle */}
          <CardComponent.HeaderDescription>
            Contrato: {item.contractNumber}
          </CardComponent.HeaderDescription>
        </CardComponent.Section>

        {/** Header Badge */}
        <CardComponent.Badge backgroundColor={normalBackground}>
          {/** Badge Description */}
          <CardComponent.BadgeDescription>
            {travelStatusName}
          </CardComponent.BadgeDescription>

          {/** Badge Icon */}
          <CardComponent.Icon>
            <Icon size={14} color={colors.theme.white} strokeWidth={3} />
          </CardComponent.Icon>
        </CardComponent.Badge>
      </CardComponent.Section>

      {/** BODY */}
      <CardComponent.Section
        style={{
          flex: 1,
          flexDirection: "column",
          gap: 8,
          paddingHorizontal: 18,
          paddingVertical: 20,
        }}
      >
        {/** BODY HEADER - OK */}
        <CardComponent.Section
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CardComponent.Section
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/** BODY AVATAR */}
            <CardComponent.Section
              style={{
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              <CardComponent.Avatar avatarName={firstDeliver.clientName} />

              {/** BODY Title */}
              <CardComponent.BodyTitle>
                {firstDeliver.clientName}
              </CardComponent.BodyTitle>
            </CardComponent.Section>
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
          </CardComponent.Section>
        </CardComponent.Section>

        {/** BODY CONTENT */}
        <CardComponent.Section style={{ flexDirection: "column", gap: 20 }}>
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
        </CardComponent.Section>
        {hasMoreThanOneDestiny && (
          <Link href={`travel/${item.id}`} asChild>
            <Button
              title="Ver mais destinos"
              variant="text"
              style={{ alignSelf: "flex-end" }}
            />
          </Link>
        )}
      </CardComponent.Section>
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
      <CardComponent.Section
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
        <CardComponent.Section
          style={{ flexDirection: "column", width: "65%" }}
        >
          <CardComponent.FooterTitle>Valor da viagem</CardComponent.FooterTitle>

          <CardComponent.FooterDescription>
            {toMoney(item.totalValue)}
          </CardComponent.FooterDescription>
        </CardComponent.Section>

        <CardComponent.Section style={{ width: "35%" }}>
          <CardComponent.ProductBadge
            productName={firstProduct.name}
            moreProductsQuantity={hasMoreThanOneProduct && moreProductsQuantity}
          />
        </CardComponent.Section>

        {/** 2° Linha */}
        <CardComponent.Section
          style={{ flexDirection: "column", width: "65%" }}
        >
          <CardComponent.FooterTitle>Saldo pendente</CardComponent.FooterTitle>

          <CardComponent.FooterDescription>
            {toMoney(item.outstandingValue)}
          </CardComponent.FooterDescription>
        </CardComponent.Section>

        <CardComponent.Section
          style={{ flexDirection: "column", width: "35%" }}
        >
          <CardComponent.FooterTitle>Embarcador</CardComponent.FooterTitle>

          <CardComponent.FooterDescription>
            {item.shipperName}
          </CardComponent.FooterDescription>
        </CardComponent.Section>
      </CardComponent.Section>
    </CardComponent.Root>
  );
}
