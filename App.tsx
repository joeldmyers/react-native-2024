import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const App = () => {
    return <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Hello Dorothee!</Text>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "blue",
      alignItems: 'center',
      justifyContent: "center",
    },
    headerText: {
        fontSize: 64,
        color: '#202020'
    }
  });

export default App;