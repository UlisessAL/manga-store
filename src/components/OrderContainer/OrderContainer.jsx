import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../global/colors";
const OrderContainer = ({ order }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleOrder}>Mangas comprados:</Text>
      {order.cart?.map((manga) => (
        <View key={manga.id} style={styles.mangaContainer}>
          <Text style={styles.mangaTitle}>{manga.title}</Text>
          <Image style={styles.img} source={{ uri: manga.img }} />
        </View>
      ))}
      <Text style={styles.total}>Total: ${order.price}</Text>
    </View>
  );
};
export default OrderContainer;
const styles = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: colors.ashGray,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  titleOrder: {
    fontFamily: "InterBold",
  },
  img: {
    width: 50,
    height: 50,
  },
  mangaContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    width: 200,
  },
  total: {
    fontFamily: "MontserratBold",
  },
  mangaTitle: {
    maxWidth: 100,
  },
});
