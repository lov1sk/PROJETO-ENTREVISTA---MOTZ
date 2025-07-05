import { Button } from "@/components/Button/Button";
import { Link, router } from "expo-router";
import { Text, View } from "react-native";

export default function IndexPage() {
  return (
    <View style={{ marginTop: 60, marginHorizontal: 24 }}>
      <Text>Home Page</Text>
      <Link href={"/travel"} asChild>
        <Button title="Ir para /travel" fullWidth />
      </Link>
    </View>
  );
}
