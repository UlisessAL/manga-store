import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import ShowCart from "../components/CartContainer/ShowCart";
import { useState } from "react";
import ItemListCategories from "../components/ItemListCategories/ItemListCategories";

export default function MangasCategorized({ category }) {
  const [cart, setCart] = useState([]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tienda de mangas</Text>
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
});
