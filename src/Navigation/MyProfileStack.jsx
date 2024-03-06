import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header/Header";
import MyProfile from "../screens/MyProfile";
import ImageSelector from "../screens/ImageSelector";
const MyProfileStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="My Profile"
      screenOptions={{ header: () => <Header title="Mi perfil" /> }}
    >
      <Stack.Screen name="My Profile" component={MyProfile} />
      <Stack.Screen name="Image Selector" component={ImageSelector} />
    </Stack.Navigator>
  );
};
export default MyProfileStack;
