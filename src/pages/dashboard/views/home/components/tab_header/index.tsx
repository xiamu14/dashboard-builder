import IconPlate from "@src/components/icon_plate";
import Responsive from "@src/components/responsive";
import { TabContext } from "@src/components/tab/context";
import TrendTips from "@src/components/trend_tips";
import { colors } from "@src/constant";
import { AlertCircledFilled } from "maple-icons";
import React, { memo, ReactNode, useContext } from "react";
import "./index.scoped.scss";

interface Props {
  index: number;
  desc: string;
  number: string;
  percent: number;
  isRise: boolean;
  icon: ReactNode;
  iconPlateBg: string;
}

const HeaderDesktop = memo(
  ({ index, desc, number, percent, isRise, icon, iconPlateBg }: Props) => {
    const { activeIndex } = useContext(TabContext);
    return (
      <div className="tab-header-box w-full h-full">
        <div className="flex <mobile:flex-col justify-start items-start">
          <IconPlate
            className="icon"
            circle
            style={{ backgroundColor: iconPlateBg }}
          >
            {icon}
          </IconPlate>
          <div>
            <div className="flex justify-start items-center">
              <span className="desc">{desc}</span>
              <AlertCircledFilled width={13} height={13} />
            </div>
            <p className="number">{number}</p>
          </div>
        </div>
        <div className="trend-tips-box">
          <TrendTips
            style={
              activeIndex !== index
                ? { backgroundColor: colors["neutral-01"] }
                : {}
            }
            percent={percent}
            isRise={isRise}
          />
        </div>
      </div>
    );
  }
);

const HeaderMobile = memo(
  ({ index, desc, number, percent, isRise, icon, iconPlateBg }: Props) => {
    const { activeIndex } = useContext(TabContext);
    return (
      <div className="tab-header-box <mobile:flex-col w-full h-full">
        <div className="flex justify-start items-start">
          <IconPlate
            className="icon"
            circle
            style={{ backgroundColor: iconPlateBg }}
          >
            {icon}
          </IconPlate>
          <p className="flex justify-start items-center flex-1">
            <span className="desc">{desc}</span>
            <AlertCircledFilled width={13} height={13} />
          </p>
        </div>
        <p className="number">{number}</p>
        <div className="trend-tips-box ">
          <TrendTips
            style={
              activeIndex !== index
                ? { backgroundColor: colors["neutral-01"] }
                : {}
            }
            percent={percent}
            isRise={isRise}
          />
        </div>
      </div>
    );
  }
);

const TabHeader = memo((props: Props) => {
  return (
    <Responsive
      mobile={<HeaderMobile {...props} />}
      desktop={<HeaderDesktop {...props} />}
    />
  );
});

export default TabHeader;
