import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import { Entypo, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import OrdersStack from "./OrdersStack";
import MyProfileStack from "./MyProfileStack";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="ShopTab"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <Entypo
                  name="shop"
                  size={24}
                  color={focused ? "black" : "grey"}
                />
                <Text style={{ color: focused ? "black" : "grey" }}>
                  Tienda
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <AntDesign
                  name="shoppingcart"
                  size={24}
                  color={focused ? "black" : "grey"}
                />
                <Text style={{ color: focused ? "black" : "grey" }}>
                  Carrito
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="OrderTab"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <FontAwesome5
                  name="history"
                  size={24}
                  color={focused ? "black" : "grey"}
                />
                <Text style={{ color: focused ? "black" : "grey" }}>
                  Ordenes
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MyProfileTab"
        component={MyProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <FontAwesome5
                  name="user"
                  size={24}
                  color={focused ? "black" : "grey"}
                />
                <Text style={{ color: focused ? "black" : "grey" }}>
                  Perfil
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
  },
  tabContainer: {
    alignItems: "center",
  },
});
