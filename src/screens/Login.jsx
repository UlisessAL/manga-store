import { Pressable, StyleSheet, Text, View } from "react-native";
import InputForm from "../components/FormComponents/InputForm";
import SubmitButton from "../components/FormComponents/SubmitButton";
import { colors } from "../global/colors";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { loginSchema } from "../validations/loginSchema";
import { insertSession } from "../db";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEMail, setErrorEMail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerLogIn, result] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    try {
      loginSchema.validateSync({ email, password });
      triggerLogIn({
        email,
        password,
      });
    } catch (err) {
      switch (err.path) {
        case "email":
          setErrorEMail(err.message);
          setErrorPassword(null);
          break;
        case "password":
          setErrorPassword(err.message);
          setErrorEMail(null);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (result?.data) {
      dispatch(setUser(result.data));
      insertSession({
        email: result.data.email,
        localId: result.data.localId,
        token: result.data.idToken,
      })
        .then((result) => console.log(result))
        .catch((err) => console.log("ERROR: ", err.message));
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <InputForm
        label={"Email"}
        error={errorEMail}
        onChange={setEmail}
        placeholder={"ejemplo@email.com"}
      />
      <InputForm
        label={"Contraseña"}
        error={errorPassword}
        onChange={setPassword}
        isSecure={true}
        placeholder={"*****"}
      />
      {result?.status === "rejected" && (
        <Text style={styles.errorLogin}>Contraseña y/o Email incorrectos</Text>
      )}
      <SubmitButton
        title={result.isLoading ? "Ingresando..." : "Ingresar"}
        onPress={onSubmit}
      />
      <Pressable onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.changeSectionText}>
          ¿No tienes una cuenta? Regístrate
        </Text>
      </Pressable>
    </View>
  );
};
export default Login;
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
  errorLogin: {
    color: colors.darkRed,
  },
});
