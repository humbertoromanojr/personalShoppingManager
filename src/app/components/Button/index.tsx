import { StyleSheet, TouchableOpacity, Text } from "react-native";

type Props = {
  title: string;
};

export default function Button({ title }: Props) {
  return (
    <TouchableOpacity style={s.container} activeOpacity={0.7}>
      <Text style={s.title}>{title}</Text>
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
