import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../global/colors";
const SubmitButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
export default SubmitButton;
const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: colors.darkRed,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: colors.lightWhite,
  },
});
