import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/shopSlice/cartSlice";
export default function MangaContainer({ manga, navigation }) {
  const [buttonTitle, setButtonTitle] = useState("Agregar al carrito");
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem(manga));
    setButtonTitle("Añadido!");
    setTimeout(() => {
      setButtonTitle("Agregar al carrito");
    }, 2000);
  };
  return (
    <Pressable
      onPress={() => navigation.navigate("ItemDetail", { id: manga.id })}
      key={manga.id}
      style={styles.mangaContainer}
    >
      <Image style={styles.mangaImage} source={{ uri: manga.img }} />
      <Text style={styles.titleManga}>{manga.title}</Text>
      <Text style={styles.categoryTitle}>Categoría: {manga.category}</Text>
      <View style={styles.priceAndStock}>
        <Text>${manga.price}</Text>
        <Text>Stock: {manga.stock}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.textButton}>{buttonTitle}</Text>
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mangaImage: {
    width: 170,
    height: 250,
    borderRadius: 2,
    objectFit: "cover",
    maxHeight: "100%",
  },
  mangaContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  titleManga: {
    maxWidth: 170,
    flex: 1,
    fontWeight: "bold",
    paddingTop: 10,
    fontFamily: "MontserratBold",
  },
  button: {
    backgroundColor: "#A5243D",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    width: 170,
    justifyContent: "center",
    alignItems: "center",
  },
  priceAndStock: {
    flexDirection: "row",
    gap: 10,
  },
  textButton: {
    color: "#F3F7F6",
    fontSize: 16,
  },
  categoryTitle: {
    fontFamily: "InterRegular",
  },
});
