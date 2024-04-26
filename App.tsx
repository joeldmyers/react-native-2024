import { StyleSheet, Text, View } from "react-native";

const App = () => {
    return <View style={styles.container}>
        <Text>Foo</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "green",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default App;