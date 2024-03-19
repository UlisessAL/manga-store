import { useEffect } from "react";
import { useGetProfileImageQuery } from "../services/shopService";
import AuthStack from "./AuthStack";
import TabNavigation from "./TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setProfileImage, setUser } from "../features/auth/authSlice";
import { fetchSession } from "../db";
import { Alert } from "react-native";
const MainNavigator = () => {
  const { user, localId } = useSelector((state) => state.authReducer.value);
  const { data, error } = useGetProfileImageQuery(localId);

  const dispatch = useDispatch();
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
