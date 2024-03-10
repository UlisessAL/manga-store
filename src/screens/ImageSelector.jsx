import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { colors } from "../global/colors";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage, setProfileImage } from "../features/auth/authSlice";
import { usePostProfileImageMutation } from "../services/shopService";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const { localId } = useSelector((state) => state.authReducer.value);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      Alert.alert("Se rechazo el permiso a la camara");
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.2,
      });
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  const confirmImage = () => {
    dispatch(setCameraImage(image));
    dispatch(setProfileImage(image));
    triggerSaveProfileImage({ image, localId });
    if (result.isError) {
      Alert.alert("Ocurrio un error al cambiar la foto de perfil");
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <Pressable onPress={pickImage} style={styles.button}>
            <Text style={styles.buttonText}>Sacar otra foto</Text>
          </Pressable>
          <Pressable onPress={confirmImage} style={styles.button}>
            <Text style={styles.buttonText}>Confirmar foto</Text>
          </Pressable>
        </>
      ) : (
        <>
          <View style={styles.noPhotoContainer}>
            <Text>No photo to show...</Text>
            <Pressable style={styles.button} onPress={pickImage}>
              <Text style={styles.buttonText}>Tomar una foto</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};
export default ImageSelector;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    gap: 20,
  },
  noPhotoContainer: {
    justifyContent: "center",
    flex: 1,
    gap: 20,
  },
  button: {
    padding: 10,
    backgroundColor: colors.darkRed,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.lightWhite,
  },
  image: {
    width: 100,
    height: 100,
  },
});
