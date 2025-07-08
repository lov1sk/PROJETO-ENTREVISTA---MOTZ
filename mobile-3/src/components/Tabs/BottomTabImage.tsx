import React, { useState } from "react";
import { View } from "react-native";

export function BottomTabImage() {
  return (
    <View
      pointerEvents="none"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 98,
        flexDirection: "row",
        zIndex: -1,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          width: "50%",
          borderTopRightRadius: 90,
          boxShadow: "0px 0px 5px 0px #D7D3D3",
        }}
      />

      <View
        style={{
          backgroundColor: "white",
          width: "50%",
          borderTopLeftRadius: 90,
          boxShadow: "0px 0px 5px 0px #D7D3D3",
        }}
      />
      <View
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          backgroundColor: "white",
          transform: [{ translateX: -45 }, { translateY: 0 }],
          width: 100,
          height: 55,
          borderRadius: 0,
        }}
      />
    </View>
  );
}
