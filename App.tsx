import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const App = () => {
    return <SafeAreaView style={styles.container}>
        <View style={styles.header}><Text style={styles.buttonText}>Here are some boxes of different colors</Text></View>
        <View style={[styles.buttonDiv, styles.cyan]}><Text style={styles.buttonText}>Cyan</Text></View>
        <View style={[styles.buttonDiv, styles.blue]}><Text style={styles.buttonText}>Blue</Text></View>
        <View style={[styles.buttonDiv, styles.blue]}><Text style={styles.buttonText}>Magenta</Text></View>
        <View style={[styles.buttonDiv, styles.orange]}><Text style={styles.buttonText}>Orange</Text></View>
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
    cyan: {
        backgroundColor: '#2aa198',
    },
    blue: {
        backgroundColor: '#268bd2'
    },
    magenta: {
        backgroundColor: '#d33682'
    },
    orange: {
        backgroundColor: '#cb4b16'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    }
  });

export default App;