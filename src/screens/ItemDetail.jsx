import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import InfoManga from "../components/InfoManga/InfoManga";
import { useGetProductByIdQuery } from "../services/shopService";

const ItemDetail = ({ route }) => {
  const { id } = route.params;

  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

  let manga = {};
  for (const key in product) {
    manga = product[key];
  }

  return (
    <View style={styles.detailContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color="black" />
      ) : error ? (
        <Text>Hubo un error al cargar el producto</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          <InfoManga product={manga} />
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
