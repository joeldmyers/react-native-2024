import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Props } from "./types";
import { FC } from "react";

const PalettePreview: FC<Props> = ({ handlePress, colorPalette }) => {
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.linkText}>{colorPalette.paletteName}</Text>
        <FlatList
          data={colorPalette.colors.slice(0, 5)}
          keyExtractor={(item) => item.colorName}
          renderItem={({ item }) => (
            <View
              style={[styles.colorBox, { backgroundColor: item.hexCode }]}
            />
          )}
          horizontal
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  linkText: {
    fontSize: 24,
    padding: 10,
  },
  colorBox: {
    height: 30,
    width: 30,
    marginHorizontal: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
});

export default PalettePreview;
