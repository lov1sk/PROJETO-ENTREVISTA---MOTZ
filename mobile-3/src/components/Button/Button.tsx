import { colors } from "@/theme/colors";
import { LucideIcon } from "lucide-react-native";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

export type ButtonVariants = "contained" | "outlined" | "text";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariants;
  fullWidth?: boolean;
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
}

export function Button({
  title,
  variant = "contained",
  fullWidth = false,
  style,
  startIcon: StartIcon,
  endIcon: EndIcon,
  ...props
}: ButtonProps) {
  const variantStyle = stylesByVariant[variant];
  const textColor = variantTextColor[variant];

  return (
    <TouchableOpacity
      style={[
        styles.base,
        variantStyle,
        fullWidth ? styles.fullWidth : styles.autoWidth,
        style,
      ]}
      {...props}
    >
      {StartIcon && <StartIcon size={16} color={textColor} strokeWidth={3} />}

      <Text style={[styles.textBase, { color: textColor }]}>{title}</Text>

      {EndIcon && <EndIcon size={16} color={textColor} strokeWidth={3} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    height: 48,
    borderWidth: 2,
    borderRadius: 8,
  },
  autoWidth: {
    alignSelf: "flex-start",
  },
  fullWidth: {
    alignSelf: "stretch",
  },
  textBase: {
    fontWeight: "700",
    fontSize: 14,
  },
});

const stylesByVariant = {
  contained: {
    backgroundColor: colors.theme.orange,
    borderColor: colors.theme.orange,
  },
  outlined: {
    backgroundColor: colors.theme.white,
    borderColor: colors.theme.orange,
  },
  text: {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderColor: "transparent",
    paddingHorizontal: 0,
    height: 20,
  },
} as const;

const variantTextColor = {
  contained: colors.theme.white,
  outlined: colors.theme.orange,
  text: colors.theme.orange,
} as const;
