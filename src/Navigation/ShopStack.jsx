import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ItemDetail from "../screens/ItemDetail";
import MangasCategorized from "../screens/MangasCategorized";
import Header from "../components/Header/Header";

const ShopStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        header: () => {
          return (
            <Header
              title={
                route.name === "Home"
                  ? "Categorías"
                  : route.name === "MangasCategorized"
                  ? route.params.category.toUpperCase()
                  : "Detalle"
              }
            />
          );
        },
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
      <Stack.Screen name="MangasCategorized" component={MangasCategorized} />
    </Stack.Navigator>
  );
};

export default ShopStack;
