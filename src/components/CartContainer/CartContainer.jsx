import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useWindowDimensions,
  FlatList,
} from "react-native";
import CartItem from "./CartItem";

export default function CartContainer({ cart, setCart, price }) {
  const [isVisible, setIsVisible] = useState(false);
  const [mangaSelected, setMangaSelected] = useState({});
  const { width } = useWindowDimensions();

  const handleRemove = (mangaId) => {
    let newCart = cart.filter((manga) => manga.id !== mangaId);
    setCart(newCart);
  };

  const isSmallDevice = width <= 400;

  const stylesContainer = [
    styles.container,
    isSmallDevice && styles.containerSmall,
  ];

  return (
    <View style={stylesContainer}>
      {cart.length === 0 ? (
        <Text style={styles.title}>Tu carrito esta vacío</Text>
      ) : (
        <>
          <Text style={styles.title}>Tu carrito:</Text>
          <FlatList
            style={styles.scrollView}
            data={cart}
            renderItem={({ item: manga }) => (
              <CartItem
                manga={manga}
                isVisible={isVisible}
                mangaSelected={mangaSelected}
                handleRemove={handleRemove}
                setIsVisible={setIsVisible}
                setMangaSelected={setMangaSelected}
                width={width}
              />
            )}
            keyExtractor={(item) => item.id}
            numColumns={1}
          />

          <View style={styles.totalPriceContainer}>
            <Text style={{ fontWeight: "bold" }}>Total: ${price}</Text>
            <Pressable style={styles.buyItems}>
              <Text style={{ color: "white" }}>Comprar</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
}

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
  buyItems: {
    backgroundColor: "blue",
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
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
    alignItems: "center",
    borderTopWidth: 1,
  },
});
