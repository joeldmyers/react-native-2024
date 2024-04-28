import { FlatList, SafeAreaView, View, Text, StyleSheet } from "react-native";
import ColorBox from "../../components/ColorBox";

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{paletteName}</Text>
        </View>
        <FlatList
          style={{ width: "100%" }}
          data={colors}
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
