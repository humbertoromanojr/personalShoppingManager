import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";

import { FilterStatus } from "@/types/FilterStatus";
import { StatusIcon } from "@/app/components/StatusIcon";

type Props = TouchableOpacityProps & {
  status: FilterStatus;
  isActive: boolean;
};

export default function Filter({ status, isActive, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[s.container, { opacity: isActive ? 1 : 0.5 }]}
      activeOpacity={0.7}
      {...rest}
    >
      <StatusIcon status={status} />
      <Text style={s.title}>
        {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
      </Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  title: {
    color: "#222",
    fontSize: 14,
  },
});
