import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from "react-native";
import { Trash2 } from "lucide-react-native";

import { FilterStatus } from "@/types/FilterStatus";
import { StatusIcon } from "@/app/components/StatusIcon";

type ItemData = {
  status: FilterStatus;
  description: string;
};

type Props = {
  data: ItemData;
  onRemove: () => void;
  onStatus: () => void;
};

export default function Item({ data, onRemove, onStatus }: Props) {
  return (
    <View style={s.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={onStatus}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>

      <Text style={s.description}>{data.description}</Text>

      <TouchableOpacity activeOpacity={0.7} onPress={onRemove}>
        <Trash2 size={18} color="#828282" />
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 20,
  },
  description: {
    flex: 1,
    fontSize: 14,
    fontWeight: 600,
  },
});
