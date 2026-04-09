import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={s.container}>
      <StatusBar style="light" />
      <Image style={s.logo} source={require("../../assets/logo.png")} />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 34,
    width: 134,
  },
});
