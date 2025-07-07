import { useGetTravelDetails } from "@/api/queries/travelQueries";
import { Button } from "@/components/Button/Button";
import { FlatListSeparator } from "@/components/FlatList/FlatListSeparator";
import { TravelCardBadge } from "@/components/Card/Badge";
import { TravelCardBadgeDescription } from "@/components/Card/BadgeDescription";
import { TravelCardHeaderDescription } from "@/components/Card/HeaderDescription";
import { TravelCardHeaderTitle } from "@/components/Card/HeaderTitle";
import { TravelDocumentCard } from "@/components/TravelDocumentCard";
import { colors } from "@/theme/colors";
import { getColorsByTravelStatus } from "@/utils/travel/getColorsByTravelStatus";
import { getIconByTravelStatus } from "@/utils/travel/getIconByTravelStatus";
import { getTravelStatusName } from "@/utils/travel/getTravelStatusNames";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Alert, FlatList, ScrollView, Text, View } from "react-native";
import { MapIllustration } from "@/assets/MapIllustration";
import { MoneyIllustration } from "@/assets/MoneyIllustration";
import { PackagesIllustration } from "@/assets/PackagesIllustration";
import { toLocaleString, toMoney } from "@/utils/numberUtils";
import { useState } from "react";
import { TravelProductsAlert } from "@/components/TravelProductsAlert";
import { TravelMapAlert } from "@/components/TravelMapAlert";
import { TravelConfirmDeliverAlert } from "@/components/TravelConfirmDeliverAlert";
import { TravelReturnDeliverAlert } from "@/components/TravelReturnDeliverAlert";
import { TravelDetailsCard } from "@/components/TravelDetailsCard";
import { Page } from "@/components/Page";
import { LoadingSpinner } from "@/components/Loading/LoadingSpinner";

interface TravelParamsProps {
  id?: string;
}
export default function Travel() {
  const params = useLocalSearchParams() as TravelParamsProps;
  const [productsAlertOpen, setProductsAlertOpen] = useState<boolean>(false);
  const [mapAlertOpen, setMapAlertOpen] = useState<boolean>(false);
  const [confirmDeliverAlertOpen, setConfirmDeliverAlertOpen] =
    useState<boolean>(false);
  const [returnDeliverAlertOpen, setReturnDeliverAlertOpen] =
    useState<boolean>(false);

  const {
    data: travelDetails,
    isFetching,
    error,
  } = useGetTravelDetails({
    id: params?.id,
  });

  if (isFetching) {
    return <LoadingSpinner size={96} />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  const travelStatusName = getTravelStatusName(travelDetails?.status);
  const Icon = getIconByTravelStatus(travelDetails?.status);

  const { light: lightBackground, normal: normalBackground } =
    getColorsByTravelStatus(travelDetails?.status);

  const delivers = travelDetails?.deliveries;
  const documents = travelDetails?.documents;

  // products
  const products = travelDetails?.products;
  const firstProduct = travelDetails?.products[0];
  const hasMoreThanOneProduct = travelDetails?.products.length > 1;
  const moreProductsQuantity = travelDetails?.products.length - 1;

  return (
    <>
      <Page.Root
        style={{
          flexDirection: "column",
          paddingVertical: 12,
        }}
      >
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
        <View style={{ flex: 1 }}>
          <FlatList
            horizontal
            data={delivers}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <TravelDetailsCard
                deliver={item}
                setConfirmDeliverAlertOpen={setConfirmDeliverAlertOpen}
                setReturnDeliverAlertOpen={setConfirmDeliverAlertOpen}
              />
            )}
            ItemSeparatorComponent={() => (
              <FlatListSeparator orientation="horizontal" gap={12} />
            )}
            contentContainerStyle={{
              marginTop: 12,
              paddingHorizontal: 24,
            }}
          />
        </View>

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
              {toLocaleString(travelDetails.totalDistanceInKm, 1).concat(" Km")}
            </Text>
            <Button
              title="Ver Mapa"
              variant="text"
              style={{ alignSelf: "center" }}
              onPress={() => setMapAlertOpen(true)}
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
              onPress={() => setProductsAlertOpen(true)}
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
              onPress={() =>
                router.navigate(`travel/${travelDetails.id}/documents`)
              }
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
      </Page.Root>
      <TravelConfirmDeliverAlert
        visible={confirmDeliverAlertOpen}
        onClose={() => setConfirmDeliverAlertOpen(false)}
      />
      <TravelReturnDeliverAlert
        visible={returnDeliverAlertOpen}
        onClose={() => setReturnDeliverAlertOpen(false)}
      />
      <TravelMapAlert
        visible={mapAlertOpen}
        onClose={() => setMapAlertOpen(false)}
        distance={travelDetails.totalDistanceInKm}
      />
      <TravelProductsAlert
        visible={productsAlertOpen}
        onClose={() => setProductsAlertOpen(false)}
        products={products}
      />
    </>
  );
}
