import { FlatList, StyleSheet } from "react-native";
import MangaContainer from "../MangaContainer/MangaContainer";
import { useEffect, useState } from "react";
import Search from "../Search/Search";
import { useSelector } from "react-redux";
export default function ItemListCategories({ setCart, cart, navigation }) {
  const [mangas, setMangas] = useState([]);
  const [keyword, setKeyword] = useState("");
  const productsFilteredByCategory = useSelector(
    (state) => state.shopReducer.value.productsFilteredByCategory
  );

  const filterMangas = () => {
    const filteredProducts = productsFilteredByCategory.filter((manga) =>
      manga.title.includes(keyword)
    );
    setMangas(filteredProducts);
  };

  useEffect(() => {
    filterMangas();
  }, [productsFilteredByCategory, keyword]);

  return (
    <>
      <Search onSearch={setKeyword} />
      <FlatList
        style={styles.mangaContainer}
        data={mangas}
        renderItem={({ item: manga }) => (
          <MangaContainer
            manga={manga}
            key={manga.id}
            setCart={setCart}
            cart={cart}
            navigation={navigation}
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
