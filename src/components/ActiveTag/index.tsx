import Tag from "@src/components/tag";
import { colors } from "@src/constant";
import React, { memo } from "react";

const ActiveTag = memo(({ isActive }: { isActive: boolean }) => {
  return (
    <Tag color={isActive ? colors["secondary-07"] : colors["secondary-06"]}>
      <span
        style={{
          color: isActive ? colors["primary-02"] : colors["primary-03"],
        }}
      >
        {isActive ? "Active" : "Deactive"}
      </span>
    </Tag>
  );
});

export default ActiveTag;
