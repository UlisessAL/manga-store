import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../global/colors";
const InputForm = ({ label, error, onChange, isSecure, placeholder }) => {
  const [input, setInput] = useState("");
  const onChangeText = (text) => {
    setInput(text);
    onChange(text);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.labelInput}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure} //Para saber si tiene que encriptar el input o no
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};
export default InputForm;
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    gap: 5,
    padding: 5,
    backgroundColor: colors.ashGray,
  },
  labelInput: {
    fontWeight: "bold",
  },
  input: {
    borderBottomWidth: 2,
    width: 300,
    height: 30,
  },
  error: {
    color: "red",
    textAlign: "center",
  },
});
