import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import MangaContainer from "../MangaContainer/MangaContainer";
import { useEffect, useState } from "react";
import Search from "../Search/Search";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../../services/shopService";
export default function ItemListCategories({ navigation }) {
  const [mangas, setMangas] = useState([]);
  const [keyword, setKeyword] = useState("");

  const category = useSelector(
    (state) => state.shopReducer.value.categorySelected
  );

  const {
    data: productsFilteredByCategory,
    isLoading,
    error,
  } = useGetProductsByCategoryQuery(category);

  const filterMangas = () => {
    const newData = [];
    for (const key in productsFilteredByCategory) {
      newData.push(productsFilteredByCategory[key]);
    }
    const filteredProducts = newData.filter((manga) =>
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
      {isLoading ? (
        <ActivityIndicator size="large" color="black" />
      ) : error ? (
        <Text>Hubo un error al cargar productos</Text>
      ) : (
        <FlatList
          style={styles.mangaContainer}
          data={mangas}
          renderItem={({ item: manga }) => (
            <MangaContainer manga={manga} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  mangaContainer: {
    flex: 1,
  },
});
