import { StyleSheet, View } from "react-native";
import Header from "../components/Header/Header";
import Categories from "../components/Categories/Categories";
const Home = ({ setCategorySelected }) => {
  return (
    <View style={styles.container}>
      <Header title={"Categorías"} />
      <Categories setCategorySelected={setCategorySelected} />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
