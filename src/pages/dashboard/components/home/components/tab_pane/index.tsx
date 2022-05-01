import Button from "@src/components/button";
import IconPlate from "@src/components/icon_plate";
import { colors } from "@src/constant";
import { Avatar } from "antd";
import { DirectionRight } from "maple-icons";
import React, { memo } from "react";
import "./index.scoped.scss";

export const TabPane = memo(() => {
  return (
    <div className="tab-pane-box w-full flex flex-col justify-center">
      <div className="desc-box flex justify-between items-center">
        <p className="desc-text">
          Welcome{" "}
          <span style={{ color: colors["neutral-07"] }}>857 customers </span>
          with a<br />
          personal message 😎
        </p>
        <Button plain>Send message</Button>
      </div>
      <div className="gallery flex justify-around items-center">
        {["Glady", "Elbert", "Joyce"].map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <Avatar
                size={64}
                src={`https://joeschmoe.io/api/v1/random?t=${index}`}
              />
              <span className="mt-[6px]">{item}</span>
            </div>
          );
        })}
        <div className="flex flex-col justify-center items-center">
          <IconPlate
            className="btn-view-all"
            style={{ width: 64, height: 64 }}
            circle
          >
            <DirectionRight
              width={18}
              height={15}
              color={colors["neutral-04"]}
            />
          </IconPlate>
          <span className="mt-[6px]">View all</span>
        </div>
      </div>
    </div>
  );
});
