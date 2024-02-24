import { Pressable, StyleSheet, Text } from "react-native";
import Card from "../../Card/Card";
import { colors } from "../../../global/colors";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../../../features/shopSlice/shopSlice";
const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();
  return (
    <Pressable
      onPress={() => {
        dispatch(setCategorySelected(category));
        navigation.navigate("MangasCategorized");
      }}
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
