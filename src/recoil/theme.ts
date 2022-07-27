import { ThemeType } from "@src/model/theme";
import { atom } from "recoil";

export const themeAtom = atom<ThemeType>({
  key: "themeAtom",
  default: "Light",
});
