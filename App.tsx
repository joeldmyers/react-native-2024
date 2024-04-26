import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const App = () => {
    return <SafeAreaView style={styles.container}>
        <View style={styles.header}><Text style={styles.buttonText}>Here are some boxes of different colors</Text></View>
        <View style={[styles.buttonDiv, { backgroundColor: '#2aa198'}]}><Text style={styles.buttonText}>Cyan</Text></View>
        <View style={[styles.buttonDiv, { backgroundColor: '#268bd2'}]}><Text style={styles.buttonText}>Blue</Text></View>
        <View style={[styles.buttonDiv, { backgroundColor: '#d33682'}]}><Text style={styles.buttonText}>Magenta</Text></View>
        <View style={[styles.buttonDiv, { backgroundColor: '#cb4b16'}]}><Text style={styles.buttonText}>Orange</Text></View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: 'center',
      justifyContent: 'flex-start',
      margin: 20
    },
    header: {
        marginTop: 30
    },
    headerText: {
        fontSize: 64,
        color: '#202020'
    },
    buttonDiv: {
        padding: 20,
        width: '100%',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    }
  });

export default App;