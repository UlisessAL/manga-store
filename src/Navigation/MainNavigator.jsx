import { useEffect } from "react";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProfileImageQuery,
} from "../services/shopService";
import AuthStack from "./AuthStack";
import TabNavigation from "./TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setProfileImage, setUser } from "../features/auth/authSlice";
import { fetchSession } from "../db";
import { Alert } from "react-native";
import { setCategories, setProducts } from "../features/shopSlice/shopSlice";
const MainNavigator = () => {
  const { user, localId } = useSelector((state) => state.authReducer.value);
  const { data, error } = useGetProfileImageQuery(localId);
  const { data: products, isLoading } = useGetProductsQuery();
  const { data: categories } = useGetCategoriesQuery();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProducts(products));
    dispatch(setCategories(categories));
  }, [isLoading]);

  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession();
        if (session?.rows.length) {
          const user = session.rows._array[0];
          dispatch(setUser(user));
        }
      } catch (error) {
        Alert.alert(error.message);
      }
    })();
  }, [user]);

  useEffect(() => {
    if (data) {
      dispatch(setProfileImage(data.image));
    }
    if (error) {
      Alert.alert("Error al obtener la imagen de perfil del usuario");
    }
  }, [data]);

  return (
    <NavigationContainer>
      {user ? <TabNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default MainNavigator;
