import { FlatList, SafeAreaView, View, Text, StyleSheet } from "react-native";
import ColorBox from "../../components/ColorBox";
import { FIRST_COLORS } from "./consts";

const ColorPalette = () => {
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
          data={FIRST_COLORS}
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
