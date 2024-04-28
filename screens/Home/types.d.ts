import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { ColorPalette } from "../ColorPalette/types";

export type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type Props = {
  navigation: ProfileScreenNavigationProp;
  route: { params: { newColorPalette: ColorPalette } };
};
