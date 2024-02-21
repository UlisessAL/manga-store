import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header/Header";
import Cart from "../screens/Cart";
const CartStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{ header: () => <Header title="Carrito" /> }}
    >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};
export default CartStack;
