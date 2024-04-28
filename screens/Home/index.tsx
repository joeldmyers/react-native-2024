import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Props } from "./types";
import { ALL_COLORS } from "../ColorPalette/consts";
import PalettePreview from "../../components/PalettePreview";

const Home = ({ navigation }: Props) => {
  return (
    <View>
      <FlatList
        style={{ width: "100%" }}
        data={ALL_COLORS}
        keyExtractor={(item) => item.paletteName}
        renderItem={(data) => (
          <PalettePreview
            handlePress={() =>
              navigation.navigate("ColorPalette", {
                paletteName: data.item.paletteName,
                colors: data.item.colors,
              })
            }
            colorPalette={data.item}
          />
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
