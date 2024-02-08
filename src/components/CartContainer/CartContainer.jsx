import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import ModalRemove from "../ModalRemove/ModalRemove";

export default function CartContainer({ cart, setCart }) {
  const [isVisible, setIsVisible] = useState(false);
  const [mangaSelected, setMangaSelected] = useState({});
  const { width } = useWindowDimensions();

  const handleRemove = (mangaId) => {
    let newCart = cart.filter((manga) => manga.id !== mangaId);
    setCart(newCart);
  };
  const handleSelect = (manga) => {
    setIsVisible(!isVisible);
    setMangaSelected(manga);
  };

  const isSmallDevice = width <= 400;

  const stylesContainer = [
    styles.container,
    isSmallDevice && styles.containerSmall,
  ];

  const stylesMangaContainer = [
    styles.mangaContainer,
    isSmallDevice && styles.mangaContainerSmall,
  ];

  return (
    <View style={stylesContainer}>
      {cart.length === 0 ? (
        <Text style={styles.title}>Tu carrito esta vacío</Text>
      ) : (
        <Text style={styles.title}>Tu carrito:</Text>
      )}

      <ScrollView>
        {cart.map((manga) => (
          <View style={stylesMangaContainer} key={manga.id}>
            <Image source={manga.img} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.mangaTitle}>{manga.title}</Text>
              <View style={styles.priceAndQuantity}>
                <Text style={styles.price}>${manga.price}</Text>
                <Text>Cantidad:{manga.quantity}</Text>
              </View>
            </View>

            <Pressable
              style={styles.removeItem}
              onPress={() => handleSelect(manga)}
            >
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
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
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
  containerSmall: {
    height: 300,
  },
  mangaContainerSmall: {
    gap: 0,
    width: 350,
  },
});
