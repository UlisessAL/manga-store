import { FlatList, StyleSheet } from "react-native";
import MangaContainer from "../MangaContainer/MangaContainer";
export default function ListOfMangas({ mangas, setCart, cart }) {
  return (
    <>
      <FlatList
        style={styles.mangaContainer}
        data={mangas}
        renderItem={({ item: manga }) => (
          <MangaContainer
            manga={manga}
            key={manga.id}
            setCart={setCart}
            cart={cart}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </>
  );
}

const styles = StyleSheet.create({
  mangaContainer: {
    flex: 1,
  },
});
