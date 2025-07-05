import { useGetTravelDetails } from "@/api/queries/travelQueries";
import { Button } from "@/components/Button/Button";
import { FlatListSeparator } from "@/components/FlatList/FlatListSeparator";
import { TravelCardBadge } from "@/components/TravelCard/Badge";
import { TravelCardBadgeDescription } from "@/components/TravelCard/BadgeDescription";
import { TravelCardHeaderDescription } from "@/components/TravelCard/HeaderDescription";
import { TravelCardHeaderTitle } from "@/components/TravelCard/HeaderTitle";
import { TravelDocumentCard } from "@/components/TravelDocumentCard";
import { colors } from "@/theme/colors";
import { getColorsByTravelStatus } from "@/utils/travel/getColorsByTravelStatus";
import { getIconByTravelStatus } from "@/utils/travel/getIconByTravelStatus";
import { getTravelStatusName } from "@/utils/travel/getTravelStatusNames";
import { useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { MapIllustration } from "@/assets/MapIllustration";
import { MoneyIllustration } from "@/assets/MoneyIllustration";
import { PackagesIllustration } from "@/assets/PackagesIllustration";
import { toLocaleString, toMoney } from "@/utils/numberUtils";

interface TravelParamsProps {
  id?: string;
}
export default function Travel() {
  const params = useLocalSearchParams() as TravelParamsProps;

  const { data: travelDetails, isFetching } = useGetTravelDetails({
    id: params?.id,
  });

  // return <Text>{JSON.stringify(travelDetails, null, 2)}</Text>;

  const travelStatusName = getTravelStatusName(travelDetails?.status);
  const Icon = getIconByTravelStatus(travelDetails?.status);

  const { light: lightBackground, normal: normalBackground } =
    getColorsByTravelStatus(travelDetails?.status);

  const documents = travelDetails?.documents;
  // products
  const firstProduct = travelDetails?.products[0];
  const hasMoreThanOneProduct = travelDetails?.products.length > 1;
  const moreProductsQuantity = travelDetails?.products.length - 1;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F4F6F8",
        flexDirection: "column",
        paddingVertical: 12,
      }}
    >
      {isFetching && <Text>Carregando...</Text>}

      {travelDetails && (
        <>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 8,
              paddingVertical: 16,
              borderWidth: 1,
              borderColor: "#DCDFE3",
              borderRadius: 16,
              backgroundColor: lightBackground,
              marginHorizontal: 24,
            }}
          >
            <View style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {/** Header Title */}
              <TravelCardHeaderTitle>
                Viagem: {travelDetails.number}
              </TravelCardHeaderTitle>
              {/** Header SubTitle */}
              <TravelCardHeaderDescription>
                Contrato: {travelDetails.contractNumber}
              </TravelCardHeaderDescription>
            </View>

            {/** Header Badge */}
            <TravelCardBadge backgroundColor={normalBackground}>
              {/** Badge Description */}
              <TravelCardBadgeDescription>
                {travelStatusName}
              </TravelCardBadgeDescription>

              {/** Badge Icon */}
              <Icon size={14} color={colors.theme.white} strokeWidth={3} />
            </TravelCardBadge>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: colors.theme.orange,
              marginHorizontal: 24,
              marginTop: 16,
            }}
          ></View>

          {/** TOTALS */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 24,
              marginTop: 24,
              marginBottom: 16,
            }}
          >
            {/** Valor Total */}

            <View style={{ alignItems: "center", maxWidth: 100 }}>
              <MoneyIllustration />
              <Text
                style={{
                  marginTop: 12,
                  color: "#373737",
                  fontSize: 16,
                  fontWeight: 700,
                  lineHeight: 20,
                  letterSpacing: -0.25,
                }}
              >
                {toMoney(travelDetails.totalValue)}
              </Text>
              <Text style={{ color: "#5F5F5F" }}>Valor total</Text>
            </View>
            {/** Distancia */}
            <View style={{ alignItems: "center", maxWidth: 100 }}>
              <MapIllustration />
              <Text
                style={{
                  marginTop: 12,
                  color: "#373737",
                  fontSize: 16,
                  fontWeight: 700,
                  lineHeight: 20,
                  letterSpacing: -0.25,
                }}
              >
                {toLocaleString(travelDetails.totalDistanceInKm, 1).concat(
                  " Km"
                )}
              </Text>
              <Button
                title="Ver Mapa"
                variant="text"
                style={{ alignSelf: "center" }}
              />
            </View>
            {/** Produtos */}
            <View style={{ alignItems: "center", maxWidth: 100 }}>
              <PackagesIllustration />
              <Text
                style={{
                  marginTop: 12,
                  color: "#373737",
                  fontSize: 16,
                  fontWeight: 700,
                  lineHeight: 20,
                  letterSpacing: -0.25,
                  textAlign: "center",
                }}
              >
                {firstProduct.name}
                {hasMoreThanOneProduct && ` +${moreProductsQuantity}`}
              </Text>
              <Button
                title="Ver Produtos"
                variant="text"
                style={{ alignSelf: "center" }}
              />
            </View>
          </View>

          {/** Documentos */}
          <View
            style={{
              flexDirection: "column",
              gap: 16,
              backgroundColor: colors.theme.white,
              paddingHorizontal: 24,
              paddingVertical: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 20,
                  color: "#474747",
                  lineHeight: 26,
                }}
              >
                Documentos da viagem
              </Text>
              <Button
                title="VER TODOS"
                variant="text"
                style={{ alignSelf: "center" }}
              />
            </View>

            <FlatList
              data={documents}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TravelDocumentCard item={item} />}
              ItemSeparatorComponent={() => (
                <FlatListSeparator orientation="horizontal" />
              )}
            />
          </View>
        </>
      )}
    </View>
  );
}
