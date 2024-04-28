import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Props } from "./types";
import { FEM, RAINBOW, SOLARIZED } from "../ColorPalette/consts";

const Home = ({ navigation }: Props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ColorPalette", {
            paletteName: "Solarized",
            colors: SOLARIZED,
          })
        }
      >
        <Text style={styles.headerText}>Solarized</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ColorPalette", {
            paletteName: "Rainbow",
            colors: RAINBOW,
          })
        }
      >
        <Text style={styles.headerText}>Rainbow</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ColorPalette", {
            paletteName: "Front-End Masters",
            colors: FEM,
          })
        }
      >
        <Text style={styles.headerText}>Front-End Masters</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,
    color: "blue",
  },
});

export default Home;
