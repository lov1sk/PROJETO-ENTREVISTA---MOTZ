import { Text, View } from "react-native";

interface FlatListEmptyComponentProps {
  emptyMessage: string;
}
export function FlatListEmptyComponent({
  emptyMessage,
}: FlatListEmptyComponentProps) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 16 }}>{emptyMessage}</Text>
    </View>
  );
}
