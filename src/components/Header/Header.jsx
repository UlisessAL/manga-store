import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../global/colors";
const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkRed,
    height: 50,
    padding: 10,
    justifyContent: "center",
  },
  text: {
    color: colors.lightWhite,
    fontWeight: "bold",
  },
});
