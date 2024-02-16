import { Pressable, StyleSheet, Text } from "react-native";
import Card from "../../Card/Card";
import { colors } from "../../../global/colors";
const CategoryItem = ({ category, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("MangasCategorized", { category })}
    >
      <Card style={styles.container}>
        <Text style={styles.text}>{category.toUpperCase()}</Text>
      </Card>
    </Pressable>
  );
};
export default CategoryItem;
const styles = StyleSheet.create({
  container: {
    width: 300,
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF6E9",
  },
  text: {
    color: colors.darkRed,
    fontWeight: "bold",
  },
});
