import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import Home from "./src/screens/Home";
import MangasCategorized from "./src/screens/MangasCategorized";
import { useState } from "react";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  return (
    <View style={styles.container}>
      {categorySelected ? (
        <MangasCategorized category={categorySelected} />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#F3F7F6",
  },
});
