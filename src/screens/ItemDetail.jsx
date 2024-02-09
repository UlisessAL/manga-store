import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { allMangas } from "../dataMangas/dataMangas";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../global/colors";
import InfoManga from "../components/InfoManga/InfoManga";

const ItemDetail = ({ productDetailId, setProductDetailId, setCart, cart }) => {
  const [product, setProduct] = useState(null);
  const findProductWithId = (productDetailId) => {
    const productFinded = allMangas.find(
      (product) => product.id === productDetailId
    );
    return setProduct(productFinded);
  };
  useEffect(() => {
    findProductWithId(productDetailId);
  }, []);

  return (
    <View style={styles.detailContainer}>
      <View style={styles.containerGoBack}>
        <Pressable onPress={() => setProductDetailId(0)} style={styles.goBack}>
          <AntDesign name="leftcircleo" size={30} color="black" />
        </Pressable>
      </View>
      {product && (
        <ScrollView contentContainerStyle={styles.container}>
          <InfoManga product={product} cart={cart} setCart={setCart} />
        </ScrollView>
      )}
    </View>
  );
};
export default ItemDetail;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    gap: 10,
  },
  goBack: {
    paddingLeft: 25,
  },
  detailContainer: {
    flex: 1,
  },
  containerGoBack: {
    backgroundColor: colors.ashGray,
    padding: 5,
  },
});
