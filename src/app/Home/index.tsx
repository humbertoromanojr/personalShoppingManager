import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Alert,
  ToastAndroid,
} from "react-native";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Filter from "@/app/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import Item from "@/app/components/Item";
import { itemsStorage, ItemStorage } from "@/storage/itemsStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export default function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING);
  const [description, setDescription] = useState("");

  const [items, setItems] = useState<ItemStorage[]>([]);

  async function handleAdd() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", "Informe a descrição para adicionar.");
    }

    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING,
    };

    await itemsStorage.add(newItem);
    //load items in screen
    await itemsByStatus();
    setFilter(FilterStatus.PENDING);

    ToastAndroid.showWithGravity(
      `Adicionado ${description} com sucesso 👋.`,
      ToastAndroid.TOP,
      ToastAndroid.SHORT,
    );

    setDescription("");
  }

  async function itemsByStatus() {
    try {
      const response = await itemsStorage.getByStatus(filter);
      setItems(response);
    } catch (error) {
      console.log(error);
      Alert.alert("ERROR", "Não foi possível filtrar os itens.");
    }
  }

  async function handleRemove(id: string) {
    try {
      await itemsStorage.remove(id);
      await itemsByStatus();

      ToastAndroid.showWithGravity(
        `Removido com sucesso 👋.`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } catch (error) {
      console.log(error);
      Alert.alert("Remover", "Não foi possível remover.");
    }
  }

  function handleClear() {
    Alert.alert(
      "Confirmação",
      "Você tem certeza que deseja excluir toda Lista?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancelado"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => onClear(),
        },
      ],
    );
  }

  async function onClear() {
    try {
      await itemsStorage.clear();
      setItems([]);
    } catch (error) {
      console.log(error);
      Alert.alert("Clear", "Não foi possível limpar.");
    }
  }

  async function handleToggleItemStatus(id: string) {
    try {
      await itemsStorage.toggleStatus(id);
      await itemsByStatus();
    } catch (error) {
      console.log(error);
      Alert.alert("ToggleStatus", "Não foi possível alterar Status.");
    }
  }

  useEffect(() => {
    itemsByStatus();
  }, [filter]);

  return (
    <View style={s.container}>
      <StatusBar style="light" />
      <Image style={s.logo} source={require("@/assets/logo.png")} />

      <View style={s.form}>
        <Input
          placeholder="O que você precisa comprar?"
          onChangeText={setDescription}
          value={description}
        />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>

      <View style={s.content}>
        <View style={s.headerContent}>
          {FILTER_STATUS.map((status) => (
            <Filter
              key={status}
              status={status}
              isActive={status === filter}
              onPress={() => setFilter(status)}
            />
          ))}
          <TouchableOpacity style={s.clearButton} onPress={handleClear}>
            <Text style={s.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => handleToggleItemStatus(item.id)}
              onRemove={() => handleRemove(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={s.separator} />}
          contentContainerStyle={s.listContent}
          ListEmptyComponent={() => (
            <Text style={s.listEmpty}>Nenhuma compra ainda.</Text>
          )}
        />
      </View>
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
    paddingTop: 32,
    padding: 24,
  },
  headerContent: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e4e6ec",
    paddingBottom: 12,
  },
  listContent: { paddingTop: 24, paddingBottom: 62 },
  clearButton: {
    marginLeft: "auto",
  },
  clearText: {
    fontSize: 12,
    color: "#828282",
    fontWeight: "600",
  },
  separator: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#e4e6ec",
  },
  listEmpty: {
    fontSize: 22,
    color: "#808080",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 42,
  },
});
