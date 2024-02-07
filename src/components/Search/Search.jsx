import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const search = () => {
    onSearch(input.toUpperCase());
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar producto..."
        style={styles.input}
        onChangeText={setInput}
        value={input}
      />
      <Pressable onPress={search}>
        <AntDesign name="search1" size={35} color="black" />
      </Pressable>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    width: "80%",
    fontSize: 20,
  },
  container: {
    flexDirection: "row",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
