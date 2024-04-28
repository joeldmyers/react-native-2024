import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  Text,
  Button,
} from "react-native";
import { Props } from "./types";
import PalettePreview from "../../components/PalettePreview";
import { ColorPalette } from "../ColorPalette/types";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation, route }: Props) => {
  const newColorPalette = route?.params?.newColorPalette;
  const [colorPalettes, setColorPalettes] = useState<ColorPalette[]>([]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(true);

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes((palettes) => [newColorPalette, ...palettes]);
    }
  }, [newColorPalette]);

  useEffect(() => {
    const fetchColors = async () => {
      const result = await fetch(
        "https://color-palette-api.kadikraman.vercel.app/palettes",
      );
      const resultJson = await result.json();
      console.log("RESULTS!", resultJson);
      setColorPalettes(resultJson);
      setIsRefreshing(false);
    };

    if (isRefreshing) {
      fetchColors();
    }
  }, [isRefreshing]);

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
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => setIsRefreshing(true)}
          />
        }
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => navigation.navigate("ColorPaletteModal")}
          >
            <Button title="Add a Color Scheme" />
          </TouchableOpacity>
        }
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
