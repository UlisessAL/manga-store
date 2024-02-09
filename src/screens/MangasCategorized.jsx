import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import ShowCart from "../components/CartContainer/ShowCart";
import ItemListCategories from "../components/ItemListCategories/ItemListCategories";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../global/colors";

export default function MangasCategorized({
  category,
  setCategorySelected,
  setCart,
  cart,
  setProductDetailId,
}) {
  const { width } = useWindowDimensions();
  const isSmallDevice = width <= 400;
  const stylesTitle = [styles.title, isSmallDevice && styles.titleSmall];

  return (
    <View style={styles.container}>
      <View style={styles.containerGoBack}>
        <Pressable
          onPress={() => setCategorySelected("")}
          style={styles.goBack}
        >
          <AntDesign name="leftcircleo" size={30} color="black" />
        </Pressable>
      </View>
      <Text style={stylesTitle}>Tienda de mangas</Text>
      <ItemListCategories
        category={category}
        setCart={setCart}
        cart={cart}
        setProductDetailId={setProductDetailId}
      />
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
  goBack: {
    paddingLeft: 25,
    width: 60,
  },
  containerGoBack: {
    backgroundColor: colors.ashGray,
    padding: 5,
  },
});
