import { colors } from "@/theme/colors";
import { GetTravelDetailsResponse } from "@/types/travel/travel.type";
import { Text, View } from "react-native";
import { CardComponent } from "./Card";
import { Button } from "./Button/Button";

interface TravelDetailsCardProps {
  deliver: {
    clientId: string;
    clientName: string;
    origin: {
      city: string;
      address: string;
    };
    destinies: {
      city: string;
      address: string;
    }[];
  };
  setConfirmDeliverAlertOpen: (state: boolean) => void;
  setReturnDeliverAlertOpen: (state: boolean) => void;
}
export function TravelDetailsCard({
  deliver,
  setConfirmDeliverAlertOpen,
  setReturnDeliverAlertOpen,
}: TravelDetailsCardProps) {
  const firstDestiny = deliver?.destinies[0];
  const hasMoreThanOneDestiny = deliver?.destinies.length > 1;
  return (
    <View
      style={{
        gap: 20,
        width: 350,
        backgroundColor: colors.theme.white,
        borderWidth: 1,
        borderColor: "#DCDFE3",
        borderRadius: 16,
        padding: 20,
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
          <CardComponent.Avatar avatarName={deliver.clientName} />

          {/** BODY Title */}
          <CardComponent.BodyTitle>
            {deliver.clientName}
          </CardComponent.BodyTitle>
        </CardComponent.Section>
      </CardComponent.Section>
      {/** CONTENT */}
      <CardComponent.Section style={{ flex: 1, gap: 20 }}>
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
            {deliver.origin.city}
          </Text>
          <Text
            style={{
              color: "#373737",
              letterSpacing: -0.25,
              fontWeight: 400,
              fontSize: 16,
            }}
          >
            {deliver.origin.address}
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
        {hasMoreThanOneDestiny && (
          <Button
            title="Ver mais destinos"
            variant="text"
            style={{ alignSelf: "flex-end" }}
          />
        )}
      </CardComponent.Section>
      <CardComponent.Section
        style={{
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Button
          title="CONFIRMAR ENTREGA"
          variant="contained"
          onPress={() => setConfirmDeliverAlertOpen(true)}
          fullWidth
        />
        <Button
          title="SINALIZAR DEVOLUÇÃO"
          variant="outlined"
          onPress={() => setReturnDeliverAlertOpen(true)}
          fullWidth
        />
      </CardComponent.Section>
    </View>
  );
}
