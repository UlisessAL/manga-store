import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import defaultImage from "../../assets/defaultIcon.png";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";

const MyProfile = ({ navigation }) => {
  const { imageCamera } = useSelector((state) => state.authReducer.value);

  const { profileImage: image } = useSelector(
    (state) => state.authReducer.value
  );

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image
            source={{ uri: image }}
            resizeMode="cover"
            style={styles.defaultIcon}
          />
        </>
      ) : (
        <>
          <Image
            source={defaultImage}
            resizeMode="cover"
            style={styles.defaultIcon}
          />
        </>
      )}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Image Selector")}
      >
        <Text style={styles.buttonText}>Editar foto de perfil</Text>
      </Pressable>
    </View>
  );
};
export default MyProfile;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    gap: 20,
  },
  defaultIcon: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  button: {
    padding: 10,
    backgroundColor: colors.darkRed,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.lightWhite,
  },
});
