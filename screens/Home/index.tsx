import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Props } from "./types";
import { ALL_COLORS } from "../ColorPalette/consts";

const Home = ({ navigation }: Props) => {
  return (
    <View>
      <FlatList
        style={{ width: "100%" }}
        data={ALL_COLORS}
        keyExtractor={(item) => item.paletteName}
        renderItem={(data) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ColorPalette", {
                paletteName: data.item.paletteName,
                colors: data.item.colors,
              })
            }
          >
            <Text style={styles.headerText}>{data.item.paletteName}</Text>
          </TouchableOpacity>
        )}
      />
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
