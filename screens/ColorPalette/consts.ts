import { Color, ColorPalette } from "./types";

export const SOLARIZED: Color[] = [
  { colorName: "Base03", hexCode: "#002b36" },
  { colorName: "Base02", hexCode: "#073642" },
  { colorName: "Base01", hexCode: "#586e75" },
  { colorName: "Base00", hexCode: "#657b83" },
  { colorName: "Base0", hexCode: "#839496" },
  { colorName: "Base1", hexCode: "#93a1a1" },
  { colorName: "Base2", hexCode: "#eee8d5" },
  { colorName: "Base3", hexCode: "#fdf6e3" },
  { colorName: "Yellow", hexCode: "#b58900" },
  { colorName: "Orange", hexCode: "#cb4b16" },
  { colorName: "Red", hexCode: "#dc322f" },
  { colorName: "Magenta", hexCode: "#d33682" },
  { colorName: "Violet", hexCode: "#6c71c4" },
  { colorName: "Blue", hexCode: "#268bd2" },
  { colorName: "Cyan", hexCode: "#2aa198" },
  { colorName: "Green", hexCode: "#859990" },
];

export const RAINBOW: Color[] = [
  { colorName: "Red", hexCode: "#ff0000" },
  { colorName: "Orange", hexCode: "#ff7f00" },
  { colorName: "Yellow", hexCode: "#ffff00" },
  { colorName: "Green", hexCode: "#00ff00" },
  { colorName: "Violet", hexCode: "#8b00ff" },
];

export const FEM: Color[] = [
  { colorName: "Red", hexCode: "#c02d28" },
  { colorName: "Black", hexCode: "#3e3e3e" },
  { colorName: "Grey", hexCode: "#8a8a8a" },
  { colorName: "White", hexCode: "#ffffff" },
  { colorName: "Orange", hexCode: "#e66225" },
];

export const ALL_COLORS: ColorPalette[] = [
  { paletteName: "Solarized", colors: SOLARIZED },
  { paletteName: "Rainbow", colors: RAINBOW },
  { paletteName: "Front-End Masters", colors: FEM },
];
