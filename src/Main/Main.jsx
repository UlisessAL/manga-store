import { View, Text, StyleSheet } from "react-native";
import { mangas } from "../dataMangas/dataMangas";
import Constants from "expo-constants";
import ListOfMangas from "../components/ListOfMangas/ListOfMangas";
import ShowCart from "../components/CartContainer/ShowCart";
import { useState } from "react";

export default function Main() {
  const [cart, setCart] = useState([]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tienda de mangas</Text>
      <ListOfMangas mangas={mangas} setCart={setCart} cart={cart} />
      <ShowCart cart={cart} setCart={setCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
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
