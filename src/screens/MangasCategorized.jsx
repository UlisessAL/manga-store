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

export default function MangasCategorized({ navigation }) {
  const { width } = useWindowDimensions();
  const isSmallDevice = width <= 400;
  const stylesTitle = [styles.title, isSmallDevice && styles.titleSmall];
  const [cart, setCart] = useState([]);

  return (
    <View style={styles.container}>
      <ItemListCategories
        setCart={setCart}
        cart={cart}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == "android" ? Constants.statusBarHeight : 0,
    flex: 1,
    backgroundColor: "#F3F7F6",
  },
  seeCart: {
    padding: 20,
  },
});
