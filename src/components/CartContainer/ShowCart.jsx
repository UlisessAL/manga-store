import { Text, Pressable, StyleSheet, Image, View } from "react-native";
import CartContainer from "./CartContainer";
import { useState } from "react";
import cartIcon from "../../../assets/shopping-cart.webp";

export default function ShowCart({ cart, setCart }) {
  const [seeCart, setSeeCart] = useState(false);
  const handleSeeCart = () => {
    setSeeCart(!seeCart);
  };
  return (
    <>
      {seeCart && <CartContainer cart={cart} setCart={setCart} />}
      <Pressable onPress={handleSeeCart} style={styles.seeCart}>
        <View style={styles.cartIconContainer}>
          <Image source={cartIcon} style={styles.cartIcon} />
          {cart.length !== 0 && (
            <View style={styles.quantityContainer}>
              <Text style={styles.quantity}>{cart.length}</Text>
            </View>
          )}
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  seeCart: {
    padding: 20,
  },
  cartIcon: {
    width: 40,
    height: 40,
  },
  cartIconContainer: {
    flexDirection: "row",
    gap: 5,
  },
  quantity: {
    color: "white",
  },
  quantityContainer: {
    backgroundColor: "#A5243D",
    height: 25,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 20,
  },
});
