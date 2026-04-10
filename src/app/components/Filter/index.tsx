import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";

import { FilterStatus } from "@/types/FilterStatus";

type Props = TouchableOpacityProps & {
  status: FilterStatus;
  isActive: boolean;
};

export default function Filter({ status, isActive, ...rest }: Props) {
  return (
    <TouchableOpacity style={s.container} activeOpacity={0.7} {...rest}>
      <Text style={s.title}>
        {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
      </Text>
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
