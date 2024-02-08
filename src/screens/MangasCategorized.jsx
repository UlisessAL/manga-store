import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import ShowCart from "../components/CartContainer/ShowCart";
import { useState } from "react";
import ItemListCategories from "../components/ItemListCategories/ItemListCategories";
import { AntDesign } from "@expo/vector-icons";

export default function MangasCategorized({
  category,
  setCategorySelected,
  setCart,
  cart,
}) {
  const { width } = useWindowDimensions();

  const isSmallDevice = width <= 400;

  const stylesTitle = [styles.title, isSmallDevice && styles.titleSmall];

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setCategorySelected("")} style={styles.goBack}>
        <AntDesign name="leftcircleo" size={24} color="black" />
      </Pressable>
      <Text style={stylesTitle}>Tienda de mangas</Text>
      <ItemListCategories category={category} setCart={setCart} cart={cart} />
      <ShowCart cart={cart} setCart={setCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    alignSelf: "center",
    fontFamily: "InterBold",
  },
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#F3F7F6",
  },
  seeCart: {
    padding: 20,
  },
  titleSmall: {
    fontSize: 20,
  },
  goBack: {
    paddingLeft: 15,
  },
});
