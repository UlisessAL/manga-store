import { useEffect } from "react";
import { useGetProfileImageQuery } from "../services/shopService";
import AuthStack from "./AuthStack";
import TabNavigation from "./TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setProfileImage } from "../features/auth/authSlice";
const MainNavigator = () => {
  const { user, localId } = useSelector((state) => state.authReducer.value);
  const { data, error, isLoading } = useGetProfileImageQuery(localId);

  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setProfileImage(data.image));
    }
  }, [data]);

  return (
    <NavigationContainer>
      {user ? <TabNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default MainNavigator;
