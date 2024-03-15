import { Platform, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import { Provider } from "react-redux";
import Store from "./src/Store";
import MainNavigator from "./src/Navigation/MainNavigator";
import { init } from "./src/db";

init()
  .then(() => console.log("base de datos inicializada"))
  .catch((err) => {
    console.log("error");
    console.log(err);
  });

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={Store}>
      <SafeAreaView style={styles.container}>
        <MainNavigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == "android" ? Constants.statusBarHeight : 0,
    flex: 1,
    backgroundColor: "#F3F7F6",
  },
});
