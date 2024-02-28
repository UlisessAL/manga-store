import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import CategoryItem from "./CategoryItem/CategoryItem";
import { useGetCategoriesQuery } from "../../services/shopService";
const Categories = ({ navigation }) => {
  const { data, isLoading, error } = useGetCategoriesQuery();

  return (
    <View style={styles.containerCategories}>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="black" />
        ) : error ? (
          <Text>Hubo un error al cargar las categorias</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(category) => category}
            renderItem={({ item: category }) => (
              <CategoryItem category={category} navigation={navigation} />
            )}
            ItemSeparatorComponent={ItemSeparator}
          />
        )}
      </View>
    </View>
  );
};
export default Categories;

const ItemSeparator = () => <View style={{ height: 10 }} />;
const styles = StyleSheet.create({
  containerCategories: {
    flex: 1,
    alignItems: "center",
    padding: 50,
  },
  container: {
    alignItems: "center",
    width: 400,
  },
});
