import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header/Header";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ header: () => <Header title="Bienvenido!" /> }}
    >
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
export default AuthStack;
