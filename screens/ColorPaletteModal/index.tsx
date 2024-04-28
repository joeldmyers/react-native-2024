import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

const ColorPaletteModal = () => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name) {
      Alert.alert("Please enter a palette name");
    } else {
      const newColorPalette = {
        paletteName: name,
        colors: [],
      };
      Alert.alert("Palette Name", name);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Enter Palette Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Palette Name"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: "#282828",
    marginBottom: 10,
  },
  button: {
    height: 40,
    backgroundColor: "teal",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  container: {
    padding: 20,
    flex: 1,
  },
});

export default ColorPaletteModal;
