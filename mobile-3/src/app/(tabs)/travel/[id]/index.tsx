import { useGetTravelDetails } from "@/api/queries/travelQueries";
import { Button } from "@/components/Button/Button";
import { FlatListSeparator } from "@/components/FlatList/FlatListSeparator";
import { TravelCardBadge } from "@/components/Card/Badge";
import { TravelCardBadgeDescription } from "@/components/Card/BadgeDescription";
import { TravelCardHeaderDescription } from "@/components/Card/HeaderDescription";
import { TravelCardHeaderTitle } from "@/components/Card/HeaderTitle";
import { colors } from "@/theme/colors";
import { getColorsByTravelStatus } from "@/utils/travel/getColorsByTravelStatus";
import { getIconByTravelStatus } from "@/utils/travel/getIconByTravelStatus";
import { getTravelStatusName } from "@/utils/travel/getTravelStatusNames";
import { Link, router, useLocalSearchParams } from "expo-router";
import {
  Alert,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";
import { MapIllustration } from "@/assets/MapIllustration";
import { MoneyIllustration } from "@/assets/MoneyIllustration";
import { PackagesIllustration } from "@/assets/PackagesIllustration";
import { toLocaleString, toMoney } from "@/utils/numberUtils";
import { useEffect, useRef, useState } from "react";
import { TravelProductsAlert } from "@/components/TravelProductsAlert";
import { TravelMapAlert } from "@/components/TravelMapAlert";
import { TravelConfirmDeliverAlert } from "@/components/TravelConfirmDeliverAlert";
import { TravelReturnDeliverAlert } from "@/components/TravelReturnDeliverAlert";
import { TravelDetailsCard } from "@/components/TravelDetailsCard";
import { Page } from "@/components/Page";
import { LoadingSpinner } from "@/components/Loading/LoadingSpinner";
import { TravelDestiniesAlert } from "@/components/TravelDestiniesAlert";
import { TravelDocumentItem } from "@/components/TravelDocumentItem";
import { FlatListPaging } from "@/components/FlatList/FlatListPaging";
import { TravelPageStateEnum } from "@/types/travel/travel-page-params.type";
import { ChevronRight } from "lucide-react-native";
import { HelperIllustration } from "@/assets/HelperIllustration";
import { TravelDeliverItem } from "@/types/travel/travel.type";

const { width } = Dimensions.get("window");

interface TravelParamsProps {
  id?: string;
  state?: string;
}
export default function Travel() {
  const params = useLocalSearchParams() as TravelParamsProps;

  // queries
  const {
    data: travelDetails,
    isFetching,
    error,
  } = useGetTravelDetails({
    id: params?.id,
  });

  const deliveries = travelDetails?.deliveries;

  const firstDeliver = deliveries && deliveries[0];

  const documents = travelDetails?.documents;

  // products
  const products = travelDetails?.products;
  const firstProduct = travelDetails?.products[0];
  const hasMoreThanOneProduct = travelDetails?.products.length > 1;
  const moreProductsQuantity = travelDetails?.products.length - 1;

  // helpers
  const hasSomeHelper = travelDetails?.helpersQuantity > 0;

  // states
  const [productsAlertOpen, setProductsAlertOpen] = useState<boolean>(false);
  const [mapAlertOpen, setMapAlertOpen] = useState<boolean>(false);
  const [confirmDeliverAlertOpen, setConfirmDeliverAlertOpen] =
    useState<boolean>(false);
  const [returnDeliverAlertOpen, setReturnDeliverAlertOpen] =
    useState<boolean>(false);

  const [showDestiniesAlertOpen, setShowDestiniesAlertOpen] =
    useState<boolean>(false);

  const [deliver, setDeliver] = useState<TravelDeliverItem | null>(null);

  // functions
  const { light: lightBackground, normal: normalBackground } =
    getColorsByTravelStatus(travelDetails?.status);
  const travelStatusName = getTravelStatusName(travelDetails?.status);
  const Icon = getIconByTravelStatus(travelDetails?.status);

  // FLAT LIST
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < deliveries.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex - 1,
        animated: true,
      });
    }
  };

  useEffect(() => {
    const splittedStates = params.state ? params.state.split(",") : [];
    if (
      splittedStates.includes(TravelPageStateEnum.DELIVERIES_ALERT_OPEN) &&
      firstDeliver
    ) {
      setShowDestiniesAlertOpen(true);
      setDeliver(firstDeliver);
    }
  }, []);

  if (isFetching) {
    return <LoadingSpinner size={96} />;
  }

  return (
    <>
      <Page.Root>
        <Page.ScrollSection
          style={{
            flexDirection: "column",
            paddingVertical: 12,
          }}
        >
          {error && <Text>Erro: {error.message}</Text>}

          <Page.Header
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
              <TravelCardHeaderTitle>
                Viagem: {travelDetails.number}
              </TravelCardHeaderTitle>
              <TravelCardHeaderDescription>
                Contrato: {travelDetails.contractNumber}
              </TravelCardHeaderDescription>
            </View>

            <TravelCardBadge backgroundColor={normalBackground}>
              <TravelCardBadgeDescription>
                {travelStatusName}
              </TravelCardBadgeDescription>
              <Icon size={14} color={colors.theme.white} strokeWidth={3} />
            </TravelCardBadge>
          </Page.Header>

          <Page.Section style={{ flex: 1, justifyContent: "center" }}>
            <FlatList
              ref={flatListRef}
              pagingEnabled
              onScroll={handleScroll}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={deliveries}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <TravelDetailsCard
                  deliver={item}
                  setDeliver={setDeliver}
                  setConfirmDeliverAlertOpen={setConfirmDeliverAlertOpen}
                  setReturnDeliverAlertOpen={setReturnDeliverAlertOpen}
                  setShowDestiniesAlertOpen={setShowDestiniesAlertOpen}
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
            <FlatListPaging
              currentListIndex={currentIndex}
              handleNextItem={handleNext}
              handlePreviousItem={handlePrevious}
              listData={deliveries}
            />
          </Page.Section>

          <Page.Section
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 24,
              marginTop: 24,
              marginBottom: 16,
            }}
          >
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
                startIcon={ChevronRight}
                onPress={() => setMapAlertOpen(true)}
              />
            </View>

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
                startIcon={ChevronRight}
                onPress={() => setProductsAlertOpen(true)}
              />
            </View>
          </Page.Section>
          {hasSomeHelper && (
            <Page.Section
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 24,
                marginTop: 24,
                marginBottom: 16,
              }}
            >
              <View style={{ alignItems: "center", maxWidth: 100 }}>
                <HelperIllustration />
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
                  {`${travelDetails?.helpersQuantity} pessoa`}
                </Text>
                <Text style={{ color: "#5F5F5F" }}>Chapa</Text>
              </View>
            </Page.Section>
          )}

          <Page.Section
            style={{
              flexDirection: "column",
              gap: 16,
              backgroundColor: colors.theme.white,
              paddingHorizontal: 24,
              paddingTop: 20,
              paddingBottom: 40,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 4,
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

            <Page.Section style={{ flex: 1, justifyContent: "center" }}>
              <FlatList
                data={documents}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <TravelDocumentItem item={item} />}
                ItemSeparatorComponent={() => (
                  <FlatListSeparator orientation="horizontal" />
                )}
              />
            </Page.Section>
          </Page.Section>
        </Page.ScrollSection>
      </Page.Root>

      {/** Alerts */}
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
      <TravelDestiniesAlert
        visible={showDestiniesAlertOpen}
        onClose={() => setShowDestiniesAlertOpen(false)}
        deliver={deliver}
      />
    </>
  );
}
