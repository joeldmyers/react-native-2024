import { Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import ColorPalette from "./screens/ColorPalette";

import { createStackNavigator } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined; // undefined because we aren't passing any params to the home screen
  ColorPalette: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPalette" component={ColorPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
