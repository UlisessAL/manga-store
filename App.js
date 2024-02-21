import { Platform, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import TabNavigation from "./src/Navigation/TabNavigation";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TabNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == "android" ? Constants.statusBarHeight : 0,
    flex: 1,
    backgroundColor: "#F3F7F6",
  },
});
