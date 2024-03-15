import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../global/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { logout } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteSession } from "../../db";

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const { user, localId } = useSelector((state) => state.authReducer.value);

  const onLogout = async () => {
    dispatch(logout());
    const deletedSession = await deleteSession({ localId });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {user && (
        <Pressable style={styles.logoutIcon} onPress={onLogout}>
          <MaterialIcons name="logout" size={24} color="white" />
        </Pressable>
      )}
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
  logoutIcon: {
    position: "absolute",
    right: 20,
  },
});
