import { StyleSheet, View } from "react-native";
import CartContainer from "../components/CartContainer/CartContainer";

import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cartSlice.value.items);

  const totalPrice = useSelector((state) => state.cartSlice.value.total);

  return (
    <View style={styles.container}>
      <CartContainer cart={cart} price={totalPrice} />
    </View>
  );
};
export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
