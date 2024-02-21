import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header/Header";
import Orders from "../screens/Orders";
export default function OrdersStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{ header: () => <Header title="Ordenés" /> }}
    >
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
}
