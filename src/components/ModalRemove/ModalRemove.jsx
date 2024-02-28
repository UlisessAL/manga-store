import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { removeItem } from "../../features/shopSlice/cartSlice";
export default function ModalRemove({
  isVisible,
  mangaId,
  setIsVisible,
  mangaName,
}) {
  const dispatch = useDispatch();
  const handleRemoveMangaAndModal = () => {
    setIsVisible(!isVisible);
    dispatch(removeItem(mangaId));
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Estás seguro que quieres eliminar el manga {mangaName}?
          </Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.buttonRemove}
              onPress={handleRemoveMangaAndModal}
            >
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
