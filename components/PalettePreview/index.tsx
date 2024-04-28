import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Props } from "./types";
import { FC } from "react";

const PalettePreview: FC<Props> = ({ handlePress, colorPalette }) => {
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.linkText}>{colorPalette.paletteName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  linkText: {
    fontSize: 24,
    padding: 10,
  },
});

export default PalettePreview;
