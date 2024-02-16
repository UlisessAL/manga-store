import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ItemDetail from "../screens/ItemDetail";
import MangasCategorized from "../screens/MangasCategorized";
import { NavigationContainer } from "@react-navigation/native";
import Header from "../components/Header/Header";

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default Navigator;
