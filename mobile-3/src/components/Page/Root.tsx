import { ScrollView, View, ViewProps } from "react-native";

interface PageRootProps extends ViewProps {}
export function PageRoot({ children, style, ...props }: PageRootProps) {
  return (
    <View style={[{ flex: 1, backgroundColor: "#F4F6F8" }, style]} {...props}>
      <ScrollView>{children}</ScrollView>
    </View>
  );
}
