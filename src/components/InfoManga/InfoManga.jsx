import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../global/colors";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/shopSlice/cartSlice";
const InfoManga = ({ product }) => {
  const [buttonTitle, setButtonTitle] = useState("Agregar al carrito");
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem(product));
    setButtonTitle("Añadido!");
    setTimeout(() => {
      setButtonTitle("Agregar al carrito");
    }, 2000);
  };
  return (
    <View style={styles.containerAll}>
      <View style={styles.containerImage}>
        <Image source={{ uri: product.img }} style={styles.image} />
      </View>
      <Text style={styles.titleManga}>{product.title}</Text>
      <Text style={styles.aboutManga}>{product.about}</Text>
      <View style={styles.categoryAndStockContainer}>
        <Text style={styles.info}>STOCK: {product.stock}</Text>
        <Text style={styles.info}>{product.category.toUpperCase()}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.textButton}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default InfoManga;
const styles = StyleSheet.create({
  containerAll: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    gap: 10,
  },
  containerImage: {
    height: 470,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  titleManga: {
    fontSize: 30,
    maxWidth: "95%",
    fontWeight: "bold",
    paddingTop: 10,
    fontFamily: "MontserratBold",
  },
  aboutManga: {
    fontSize: 20,
    color: colors.cambridgeBlue,
    maxWidth: "95%",
  },
  detailContainer: {
    flex: 1,
  },
  categoryAndStockContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  info: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: colors.darkRed,
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#F3F7F6",
    fontSize: 16,
  },
});
