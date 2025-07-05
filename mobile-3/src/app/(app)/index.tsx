import { Button } from "@/components/Button";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function IndexPage() {
  return (
    <View style={{ marginTop: 60, marginHorizontal: 24 }}>
      <Text>Home Page</Text>
      <Button
        title="Ir para /travel"
        onPress={() => router.navigate("/travel")}
      />
    </View>
  );
}
