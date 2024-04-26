import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ColorBox from "./components/ColorBox";

const App = () => {
    return <SafeAreaView style={styles.container}>
        <View style={styles.header}><Text style={styles.headerText}>Here are some boxes of different colors</Text></View>
        <ColorBox colorName="Cyan" hexCode="#2aa198"/>
        <ColorBox colorName="Blue" hexCode="#268bd2"/>
        <ColorBox colorName="Magenta" hexCode="#d33682"/>
        <ColorBox colorName="Orange" hexCode="#cb4b16"/>
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
        fontSize: 24,
        color: '#202020'
    },
  });

export default App;