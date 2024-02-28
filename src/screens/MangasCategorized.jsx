import { View, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import ItemListCategories from "../components/ItemListCategories/ItemListCategories";

export default function MangasCategorized({ navigation }) {
  return (
    <View style={styles.container}>
      <ItemListCategories navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == "android" ? Constants.statusBarHeight : 0,
    flex: 1,
    backgroundColor: "#F3F7F6",
  },
  seeCart: {
    padding: 20,
  },
});
