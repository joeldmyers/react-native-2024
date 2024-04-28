import { ColorPaletteParams } from "./screens/ColorPalette/types";

export type MainStackParamList = {
  Home: undefined; // undefined because we aren't passing any params to the home screen
  ColorPalette: ColorPaletteParams;
};

export type RootStackParamList = {
  mode: "modal";
};
