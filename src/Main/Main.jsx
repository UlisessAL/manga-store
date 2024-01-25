import { View, Text, StyleSheet, FlatList } from "react-native";
import MangaContainer from "../components/MangaContainer/MangaContainer";
import { mangas } from "../dataMangas/dataMangas";
import Constants from "expo-constants";

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tienda de mangas</Text>
      <FlatList
        style={styles.mangaContainer}
        data={mangas}
        renderItem={({ item: manga }) => (
          <MangaContainer manga={manga} key={manga.id} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
  },
  mangaContainer: {
    flexGrow: 1,
  },
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#F3F7F6",
  },
});
