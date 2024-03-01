import { useState } from "react";
import { StyleSheet } from "react-native";
import AuthStack from "./AuthStack";
import TabNavigation from "./TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
const MainNavigator = () => {
  const user = useSelector((state) => state.authReducer.value.user);

  return (
    <NavigationContainer>
      {user ? <TabNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default MainNavigator;
const styles = StyleSheet.create({});
