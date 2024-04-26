import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  SectionList,
} from "react-native";
import ColorBox from "./components/ColorBox";

const FOODS = ["apple", "broccoli", "burrito", "pizza", "pear"];

type Section = {
  title: string;
  data: string[];
};
const SECTIONFOODS: Section[] = [
  { title: "healthy foods", data: ["apple", "broccoli", "pear"] },
  { title: "unhealthy foods", data: ["pizza", "burrito"] },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Here are some boxes of different colors
        </Text>
      </View>
      <ColorBox colorName="Cyan" hexCode="#2aa198" />
      <ColorBox colorName="Blue" hexCode="#268bd2" />
      <ColorBox colorName="Magenta" hexCode="#d33682" />
      <ColorBox colorName="Orange" hexCode="#cb4b16" />
      <FlatList
        data={FOODS}
        keyExtractor={(item) => item}
        renderItem={(data) => <Text style={styles.bodyText}>{data.item}</Text>}
      />
      <SectionList
        sections={SECTIONFOODS}
        keyExtractor={(item) => item}
        renderItem={(data) => <Text style={styles.bodyText}>{data.item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />
    </SafeAreaView>
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

export default App;
