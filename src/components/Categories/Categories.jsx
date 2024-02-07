import { FlatList, StyleSheet, View } from "react-native";
import categories from "../../dataMangas/categories.json";
import CategoryItem from "./CategoryItem/CategoryItem";
const Categories = ({ setCategorySelected }) => {
  return (
    <View style={styles.containerCategories}>
      <View style={styles.container}>
        <FlatList
          data={categories}
          keyExtractor={(category) => category}
          renderItem={({ item: category }) => (
            <CategoryItem
              category={category}
              setCategorySelected={setCategorySelected}
            />
          )}
          ItemSeparatorComponent={ItemSeparator}
        />
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
