import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Switch,
  FlatList,
} from "react-native";
import { Color, ColorPalette } from "../ColorPalette/types";
import { COLORS_TO_CHOOSE_FROM } from "./consts";

const ColorPaletteModal = ({ navigation }) => {
  const [name, setName] = useState("");
  const [selectedColors, setSelectedColors] = useState<Color[]>([]);

  const handleSubmit = () => {
    if (!name) {
      Alert.alert("Please enter a palette name");
    } else if (selectedColors.length < 3) {
      Alert.alert("Please add at least 3 colors");
    } else {
      const newColorPalette: ColorPalette = {
        paletteName: name,
        colors: selectedColors,
      };

      navigation.navigate("Home", { newColorPalette });
    }
  };

  const handleValueChange = (value: boolean, color: Color) => {
    if (value === true) {
      setSelectedColors([...selectedColors, color]);
    } else {
      const updatedColors = selectedColors.filter(
        (c) => c.colorName !== color.colorName,
      );
      setSelectedColors(updatedColors);
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
      <FlatList
        data={COLORS_TO_CHOOSE_FROM}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={styles.color}>
            <Text>{item.colorName}</Text>
            <Switch
              value={selectedColors.some((c) => c.colorName === item.colorName)}
              onValueChange={(selected) => handleValueChange(selected, item)}
            />
          </View>
        )}
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
  color: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});

export default ColorPaletteModal;
