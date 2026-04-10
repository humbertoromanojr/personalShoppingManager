import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";

export default function Home() {
  return (
    <View style={s.container}>
      <StatusBar style="light" />
      <Image style={s.logo} source={require("@/assets/logo.png")} />

      <View style={s.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" />
      </View>

      <View style={s.content}></View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0d2db",
    alignItems: "center",
    paddingTop: 62,
  },
  logo: {
    height: 34,
    width: 134,
  },
  form: {
    width: "100%",
    paddingHorizontal: 16,
    gap: 7,
    marginTop: 42,
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 24,
    padding: 24,
  },
});
