import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "@/app/components/Button";

export default function Home() {
  return (
    <View style={s.container}>
      <StatusBar style="light" />
      <Image style={s.logo} source={require("@/assets/logo.png")} />
      <Button title="Adicionar" />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0d2db",
    alignItems: "center",
    paddingTop: 62,
    padding: 24,
    gap: 24,
  },
  logo: {
    height: 34,
    width: 134,
  },
});
