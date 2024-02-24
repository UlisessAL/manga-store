import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ItemDetail from "../screens/ItemDetail";
import MangasCategorized from "../screens/MangasCategorized";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";

const ShopStack = () => {
  const Stack = createNativeStackNavigator();
  const categorySelected = useSelector(
    (state) => state.shopReducer.value.categorySelected
  );

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
                  ? categorySelected.toUpperCase()
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
