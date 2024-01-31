import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import ModalRemove from "../ModalRemove/ModalRemove";

export default function CartContainer({ cart, setCart }) {
  const [isVisible, setIsVisible] = useState(false);
  const handleRemove = (mangaId) => {
    let newCart = cart.filter((manga) => manga.id !== mangaId);
    setCart(newCart);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu carrito:</Text>
      <ScrollView>
        {cart.map((manga) => (
          <View style={styles.mangaContainer}>
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
              onPress={() => setIsVisible(!isVisible)}
            >
              <Text style={styles.deleteButtonText}>Eliminar</Text>
            </Pressable>
            <ModalRemove
              isVisible={isVisible}
              mangaId={manga.id}
              handleRemove={handleRemove}
              setIsVisible={setIsVisible}
              mangaName={manga.title}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 600,
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
});
