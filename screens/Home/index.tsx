import { View, Text, TouchableOpacity } from "react-native";
import { Props } from "./types";

const Home = ({ navigation }: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("ColorPalette")}>
        <Text>Hello World</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
