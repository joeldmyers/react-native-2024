import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";

export type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type Props = {
  navigation: ProfileScreenNavigationProp;
};
