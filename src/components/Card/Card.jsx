import { StyleSheet, Text, View } from "react-native";
const Card = ({ style, children }) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};
export default Card;
const styles = StyleSheet.create({
  container: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
    margin: 10,
  },
});
