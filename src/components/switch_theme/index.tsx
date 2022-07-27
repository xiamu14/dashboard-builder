import { ThemeType } from "@src/model/theme";
import { themeAtom } from "@src/recoil/theme";
import { MoonFilled, MoonLight, SunFilled, SunLight } from "maple-icons";
import React, { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import "./index.scoped.scss";

const SwitchTheme = React.memo(() => {
  const [theme, setTheme] = useRecoilState(themeAtom);
  const gliderMoveCss = useMemo(() => {
    const index = theme === "Light" ? 0 : 1;
    return `translateX(${index * 100}%)`;
  }, [theme]);

  const handleCheck = useCallback(
    (type: ThemeType) => {
      setTheme(type);
    },
    [setTheme]
  );
  return (
    <div className="switch-box">
      <div className="switch-header-box">
        <div className="switch-header-wrapper">
          <div className="switch-header flex w-full h-full">
            <div
              className="switch-header-item h-full flex justify-center items-center"
              onClick={() => handleCheck("Light")}
            >
              {theme === "Light" ? (
                <SunFilled width={18} height={18} />
              ) : (
                <SunLight width={18} height={18} />
              )}
              <span className="ml-[8px]">Light</span>
            </div>
            <div
              className="switch-header-item h-full flex justify-center items-center"
              onClick={() => handleCheck("Dark")}
            >
              {theme === "Dark" ? (
                <MoonFilled width={18} height={18} />
              ) : (
                <MoonLight width={18} height={18} />
              )}
              <span className="ml-[8px]">Dark</span>
            </div>
          </div>
          <span className="glider" style={{ transform: gliderMoveCss }} />
        </div>
      </div>
    </div>
  );
});

export default SwitchTheme;
