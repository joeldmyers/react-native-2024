import { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Props } from "./types";
import { ALL_COLORS } from "../ColorPalette/consts";
import PalettePreview from "../../components/PalettePreview";
import { ColorPalette } from "../ColorPalette/types";

const Home = ({ navigation }: Props) => {
  const [colorPalettes, setColorPalettes] = useState<ColorPalette[]>([]);

  useEffect(() => {
    const fetchColors = async () => {
      const result = await fetch(
        "https://color-palette-api.kadikraman.vercel.app/palettes",
      );
      const resultJson = await result.json();
      console.log("RESULTS!", resultJson);
      setColorPalettes(resultJson);
    };
    fetchColors();
  }, []);

  return (
    <View>
      <FlatList
        style={{ width: "100%" }}
        data={colorPalettes}
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
