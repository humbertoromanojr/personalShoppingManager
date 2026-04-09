import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Button() {
  return (
    <TouchableOpacity style={s.container} activeOpacity={0.7}>
      <Text style={s.title}>Adicionar</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: "#2c46b1",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    width: "100%",
    borderRadius: 7,
  },
  title: {
    color: "#fff",
    fontSize: 22,
  },
});
