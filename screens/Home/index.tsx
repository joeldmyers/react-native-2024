import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Props } from "./types";

const Home = ({ navigation }: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("ColorPalette")}>
        <Text style={styles.headerText}>Hello world</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 64,
    color: "blue",
  },
});

export default Home;
