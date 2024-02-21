import { StyleSheet, Text, View } from "react-native";
import CartContainer from "../components/CartContainer/CartContainer";
import { useEffect, useState } from "react";
import demonSlayer from "../../assets/MangaImages/demonslayer-tomo1.webp";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "DEMON SLAYER - 01",
      category: "acción",
      stock: 12,
      price: 1000,
      img: demonSlayer,
      about:
        "Tanjirou Kamado es un chico inteligente y de buen corazón que vive con su familia y gana dinero vendiendo carbón. Todo cambia cuando su familia es atacada y asesinada por un demonio. Tanjirou y su hermana Nezuko son los únicos sobrevivientes del incidente, aunque Nezuko fue convertida en demonio.",
      quantity: 1,
    },
  ]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, currentManga) =>
        (acc += currentManga.quantity * currentManga.price),
      0
    );
    setPrice(totalPrice);
  }, [cart]);

  return (
    <View style={styles.container}>
      <CartContainer cart={cart} setCart={setCart} price={price} />
    </View>
  );
};
export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
