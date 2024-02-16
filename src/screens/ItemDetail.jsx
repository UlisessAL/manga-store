import { ScrollView, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { allMangas } from "../dataMangas/dataMangas";
import InfoManga from "../components/InfoManga/InfoManga";

const ItemDetail = ({ setCart, cart, navigation, route }) => {
  const { id } = route.params;
  const [product, setProduct] = useState(null);
  const findProductWithId = (id) => {
    const productFinded = allMangas.find((product) => product.id === id);
    return setProduct(productFinded);
  };
  useEffect(() => {
    findProductWithId(id);
  }, []);

  return (
    <View style={styles.detailContainer}>
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
  detailContainer: {
    flex: 1,
  },
});
