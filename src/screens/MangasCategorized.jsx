import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import ItemListCategories from "../components/ItemListCategories/ItemListCategories";
import { useState } from "react";

export default function MangasCategorized({ navigation, route }) {
  const { category } = route.params;
  const { width } = useWindowDimensions();
  const isSmallDevice = width <= 400;
  const stylesTitle = [styles.title, isSmallDevice && styles.titleSmall];
  const [cart, setCart] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={stylesTitle}>Tienda de mangas</Text>
      <ItemListCategories
        category={category}
        setCart={setCart}
        cart={cart}
        navigation={navigation}
      />
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
    marginTop: Platform.OS == "android" ? Constants.statusBarHeight : 0,
    flex: 1,
    backgroundColor: "#F3F7F6",
  },
  seeCart: {
    padding: 20,
  },
  titleSmall: {
    fontSize: 20,
  },
});
