import { darkThemeColors, lightThemeColors } from "@src/constant/theme_colors";
import { themeAtom } from "@src/recoil/theme";
import { useRecoilValue } from "recoil";

const useTheme = () => {
  const theme = useRecoilValue(themeAtom);
  const colors = theme === "Light" ? lightThemeColors : darkThemeColors;
  return { colors };
};

export default useTheme;
