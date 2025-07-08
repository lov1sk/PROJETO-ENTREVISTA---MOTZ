import { colors } from "@/theme/colors";
import {
  GetTravelDetailsResponse,
  TravelDeliverItem,
} from "@/types/travel/travel.type";
import { findNodeHandle, Text, UIManager, View } from "react-native";
import { CardComponent } from "./Card";
import { Button } from "./Button/Button";
import { useRef, useState } from "react";
import { TravelDeliverTimelineIndicator } from "./Card/Customized/TravelDeliverTimelineIndicator";
import { TravelDeliverTimeline } from "./Card/Customized/TravelDeliverTimeLine";

interface TravelDetailsCardProps {
  deliver: TravelDeliverItem;
  setDeliver: (state: TravelDeliverItem) => void;
  setConfirmDeliverAlertOpen: (state: boolean) => void;
  setReturnDeliverAlertOpen: (state: boolean) => void;
  setShowDestiniesAlertOpen: (state: boolean) => void;
}
export function TravelDetailsCard({
  deliver,
  setDeliver,
  setConfirmDeliverAlertOpen,
  setReturnDeliverAlertOpen,
  setShowDestiniesAlertOpen,
}: TravelDetailsCardProps) {
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
      <TravelDeliverTimeline
        deliver={deliver}
        handlePress={() => {
          setDeliver(deliver);
          setShowDestiniesAlertOpen(true);
        }}
      />

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
