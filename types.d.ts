import { ColorPaletteParams } from "./screens/ColorPalette/types";

export type RootStackParamList = {
  Home: undefined; // undefined because we aren't passing any params to the home screen
  ColorPalette: ColorPaletteParams;
};
