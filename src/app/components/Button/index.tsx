import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  onPress?: () => void;
};

export default function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={s.container} activeOpacity={0.7} {...rest}>
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
