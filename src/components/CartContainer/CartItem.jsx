import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import ModalRemove from "../ModalRemove/ModalRemove";
const CartItem = ({
  manga,
  isVisible,
  mangaSelected,
  handleRemove,
  setIsVisible,
  setMangaSelected,
  width,
}) => {
  const isSmallDevice = width <= 400;

  const stylesMangaContainer = [
    styles.mangaContainer,
    isSmallDevice && styles.mangaContainerSmall,
  ];

  const handleSelect = (manga) => {
    setIsVisible(!isVisible);
    setMangaSelected(manga);
  };

  return (
    <View style={stylesMangaContainer} key={manga.id}>
      <Image source={manga.img} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.mangaTitle}>{manga.title}</Text>
        <View style={styles.priceAndQuantity}>
          <Text style={styles.price}>${manga.price}</Text>
          <Text>Cantidad:{manga.quantity}</Text>
        </View>
      </View>

      <Pressable style={styles.removeItem} onPress={() => handleSelect(manga)}>
        <Text style={styles.deleteButtonText}>Eliminar</Text>
      </Pressable>
      <ModalRemove
        isVisible={isVisible}
        mangaId={mangaSelected.id}
        handleRemove={handleRemove}
        setIsVisible={setIsVisible}
        mangaName={mangaSelected.title}
      />
    </View>
  );
};
export default CartItem;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 30,
  },
  mangaContainer: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  image: {
    height: 80,
    width: 80,
    objectFit: "contain",
  },
  removeItem: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
  },
  deleteButtonText: {
    color: "white",
  },
  details: {
    minWidth: 170,
    gap: 10,
  },
  mangaTitle: {
    maxWidth: 170,
    color: "gray",
  },
  priceAndQuantity: {
    flexDirection: "row",
    gap: 25,
  },
  price: {
    fontWeight: "bold",
  },
  mangaContainerSmall: {
    gap: 0,
    width: 350,
  },
  scrollView: {
    maxHeight: "85%",
  },
  totalPriceContainer: {
    padding: 10,
  },
});
