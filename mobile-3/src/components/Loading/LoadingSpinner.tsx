// components/LoadingSpinner.tsx

import React, { useEffect, useRef } from "react";
import { Animated, Easing, View, ViewStyle } from "react-native";
import { LoaderCircle } from "lucide-react-native";
import { colors } from "@/theme/colors";

type LoadingSpinnerProps = {
  size?: number;
  color?: string;
  style?: ViewStyle;
};

const AnimatedLoaderCircle = Animated.createAnimatedComponent(LoaderCircle);
export function LoadingSpinner({
  size = 24,
  color = "black",
  style,
}: LoadingSpinnerProps) {
  const spinAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinAnim]);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AnimatedLoaderCircle
        size={size}
        color={colors.theme.orange}
        style={[
          {
            transform: [{ rotate: spin }],
          },
          style,
        ]}
      />
    </View>
  );
}
