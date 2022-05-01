import { motion } from "framer-motion";
import React, { memo, ReactNode, useCallback, useMemo, useState } from "react";
import "./index.scoped.scss";

interface Props {
  tabs: { header: ReactNode; pane: ReactNode }[];
  activeIndex?: number;
}

const contentVariant = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hide: {
    opacity: 0,
    x: 10,
    transition: {
      duration: 0.5,
    },
  },
};

const Tab = memo(({ tabs, activeIndex = 0 }: Props) => {
  const [checkedIndex, setCheckedIndex] = useState(activeIndex);
  const gliderMoveCss = useMemo(() => {
    return `translateX(${checkedIndex * 100}%)`;
  }, [checkedIndex]);

  const handleCheck = useCallback((index: number) => {
    setCheckedIndex(index);
  }, []);

  return (
    <div className="tab-box">
      <div className="tab-header">
        <div className="tab-header-wrapper flex w-full h-full">
          {tabs.map((item, index) => {
            return (
              <div
                key={index}
                className="tab-header-item h-full flex justify-center items-center"
                onClick={() => handleCheck(index)}
              >
                {item.header}
              </div>
            );
          })}
        </div>
        <span className="glider" style={{ transform: gliderMoveCss }} />
      </div>
      <div className="tab-pane w-full flex">
        {tabs.map((item, index) => {
          return (
            <motion.div
              key={index}
              role="tabpanel"
              variants={{
                show: {
                  display: "block",
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
                hide: { display: "none" },
              }}
              animate={index === checkedIndex ? "show" : "hide"}
              initial="hide"
            >
              <motion.div variants={contentVariant}>{item.pane}</motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
});

export default Tab;
