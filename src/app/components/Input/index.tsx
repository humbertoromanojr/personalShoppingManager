import { StyleSheet, TextInput, TextInputProps } from "react-native";

type Props = TextInputProps & {
  placeholder: string;
};

export default function Button({ placeholder, ...rest }: Props) {
  return <TextInput style={s.container} placeholder={placeholder} {...rest} />;
}

const s = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    height: 48,
    width: "100%",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "3c3c5cb",
  },
  title: {
    color: "#fff",
    fontSize: 22,
  },
});
