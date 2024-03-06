import { Pressable, StyleSheet, Text, View } from "react-native";
import InputForm from "../components/FormComponents/InputForm";
import { useEffect, useState } from "react";
import SubmitButton from "../components/FormComponents/SubmitButton";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";
import { useSignUpMutation } from "../services/authService";
import { colors } from "../global/colors";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [triggerSignup, result] = useSignUpMutation();

  const dispatch = useDispatch();

  const onSubmit = () => {
    try {
      signupSchema.validateSync({ email, password, confirmPassword });
      triggerSignup({
        email,
        password,
      });
    } catch (err) {
      switch (err.path) {
        case "email":
          setErrorEmail(err.message);
          setErrorPassword(null);
          setErrorConfirmPassword(null);
          break;
        case "password":
          setErrorPassword(err.message);
          setErrorEmail(null);
          setErrorConfirmPassword(null);

          break;
        case "confirmPassword":
          setErrorConfirmPassword(err.message);
          setErrorEmail(null);
          setErrorPassword(null);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result));
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <InputForm
        label={"Email"}
        error={errorEmail}
        onChange={setEmail}
        placeholder="ejemplo@email.com"
      />
      <InputForm
        label={"Contraseña"}
        error={errorPassword}
        onChange={setPassword}
        isSecure={true}
        placeholder="*****"
      />
      <InputForm
        label={"Confirmar contraseña"}
        error={errorConfirmPassword}
        onChange={setConfirmPassword}
        isSecure={true}
        placeholder="*****"
      />
      <SubmitButton title={"Registrarse"} onPress={onSubmit} />
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.changeSectionText}>
          ¿Ya tienes una cuenta? Inicia sesión
        </Text>
      </Pressable>
    </View>
  );
};
export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.darkRed,
  },
  changeSectionText: {
    color: "blue",
    borderBottomWidth: 1,
    borderColor: "blue",
  },
});
