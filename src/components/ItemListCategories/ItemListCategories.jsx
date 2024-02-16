import { FlatList, StyleSheet } from "react-native";
import MangaContainer from "../MangaContainer/MangaContainer";
import { allMangas } from "../../dataMangas/dataMangas";
import { useEffect, useState } from "react";
import Search from "../Search/Search";
export default function ItemListCategories({
  setCart,
  cart,
  category,
  navigation,
}) {
  const [mangas, setMangas] = useState([]);
  const [keyword, setKeyword] = useState("");

  const filterMangas = () => {
    const newProducts = allMangas.filter(
      (manga) => manga.category === category
    );
    const filteredProducts = newProducts.filter((manga) =>
      manga.title.includes(keyword)
    );
    setMangas(filteredProducts);
  };

  useEffect(() => {
    filterMangas();
  }, [category, keyword]);

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
