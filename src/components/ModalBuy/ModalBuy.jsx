import { View, Text, Modal, StyleSheet, Pressable } from "react-native";
export default function ModalBuy({ isVisible, setIsVisible, confirmCart }) {
  const handleBuyMangas = () => {
    setIsVisible(!isVisible);
    confirmCart();
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Deseas comprar los mangas?</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonRemove} onPress={handleBuyMangas}>
              <Text style={styles.text}>Si</Text>
            </Pressable>
            <Pressable
              style={styles.buttonCancel}
              onPress={() => setIsVisible(!isVisible)}
            >
              <Text style={styles.text}>No</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    padding: 30,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    maxWidth: 300,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 50,
    paddingTop: 20,
  },
  buttonRemove: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
  },
  buttonCancel: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
