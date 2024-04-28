import { FlatList, SafeAreaView, View, Text, StyleSheet } from "react-native";
import ColorBox from "../../components/ColorBox";

type Color = {
  colorName: string;
  hexCode: string;
};

const ColorPalette = () => {
  const COLORS: Color[] = [
    {
      colorName: "Base03",
      hexCode: "#002b36",
    },
    {
      colorName: "Base02",
      hexCode: "#073642",
    },
    {
      colorName: "Base01",
      hexCode: "#586e75",
    },
    {
      colorName: "Base00",
      hexCode: "#657b83",
    },
    {
      colorName: "Base0",
      hexCode: "#839496",
    },
    {
      colorName: "Base1",
      hexCode: "#93a1a1",
    },
    {
      colorName: "Base2",
      hexCode: "#eee8d5",
    },
    {
      colorName: "Base3",
      hexCode: "#fdf6e3",
    },
    {
      colorName: "Yellow",
      hexCode: "#b58900",
    },
    {
      colorName: "Orange",
      hexCode: "#cb4b16",
    },
    {
      colorName: "Red",
      hexCode: "#dc322f",
    },
    {
      colorName: "Magenta",
      hexCode: "#d33682",
    },
    {
      colorName: "Violet",
      hexCode: "#6c71c4",
    },
    {
      colorName: "Blue",
      hexCode: "#268bd2",
    },
    {
      colorName: "Cyan",
      hexCode: "#2aa198",
    },
    {
      colorName: "Green",
      hexCode: "#859990",
    },
  ];

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Here are some boxes of different colors
          </Text>
        </View>
        <FlatList
          style={{ width: "100%" }}
          data={COLORS}
          keyExtractor={(item) => item.colorName}
          renderItem={(data) => (
            <ColorBox
              colorName={data.item.colorName}
              hexCode={data.item.hexCode}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 20,
  },
  header: {
    marginTop: 30,
  },
  headerText: {
    fontSize: 24,
    color: "#202020",
  },
  bodyText: {
    fontSize: 18,
    padding: 10,
  },
});

export default ColorPalette;
