import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

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
