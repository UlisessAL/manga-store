import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Home from "./src/screens/Home";
import MangasCategorized from "./src/screens/MangasCategorized";
import { useState } from "react";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import ItemDetail from "./src/screens/ItemDetail";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  const [fontsLoaded] = useFonts(fonts);
  const [cart, setCart] = useState([]);
  const [productDetailId, setProductDetailId] = useState(0);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      {productDetailId !== 0 ? (
        <ItemDetail
          productDetailId={productDetailId}
          setProductDetailId={setProductDetailId}
          cart={cart}
          setCart={setCart}
        />
      ) : (
        <ShowCategories
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
          cart={cart}
          setCart={setCart}
          setProductDetailId={setProductDetailId}
        />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const ShowCategories = ({
  categorySelected,
  setCategorySelected,
  cart,
  setCart,
  setProductDetailId,
}) => {
  return (
    <>
      {categorySelected ? (
        <MangasCategorized
          category={categorySelected}
          setCategorySelected={setCategorySelected}
          cart={cart}
          setCart={setCart}
          setProductDetailId={setProductDetailId}
        />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == "android" ? Constants.statusBarHeight : 0,
    flex: 1,
    backgroundColor: "#F3F7F6",
  },
});
