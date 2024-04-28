import { View, Text, StyleSheet } from "react-native";
import { FC } from "react";
import { Props } from "./types";

const ColorBox: FC<Props> = ({ colorName, hexCode }) => {
  return (
    <View style={[styles.buttonDiv, { backgroundColor: hexCode }]}>
      <Text style={styles.buttonText}>{colorName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonDiv: {
    padding: 20,
    width: "100%",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  cyan: {
    backgroundColor: "#2aa198",
  },
  blue: {
    backgroundColor: "#268bd2",
  },
  magenta: {
    backgroundColor: "#d33682",
  },
  orange: {
    backgroundColor: "#cb4b16",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ColorBox;
