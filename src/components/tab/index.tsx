import { TabContext } from "@src/components/tab/context";
import { motion } from "framer-motion";
import React, { memo, ReactNode, useCallback, useMemo, useState } from "react";
import "./index.scoped.scss";

interface Props {
  tabs: { header: ReactNode; pane: ReactNode }[];
  defaultActiveIndex?: number;
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

const Tab = memo(({ tabs, defaultActiveIndex = 0 }: Props) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const gliderMoveCss = useMemo(() => {
    return `translateX(${activeIndex * 100}%)`;
  }, [activeIndex]);

  const handleCheck = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const contextValue = useMemo(() => {
    return { activeIndex };
  }, [activeIndex]);

  return (
    <TabContext.Provider value={contextValue}>
      <div className="tab-box">
        <div className="tab-header-box">
          <div className="tab-header-wrapper">
            <div className="tab-header flex w-full h-full">
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
                animate={index === activeIndex ? "show" : "hide"}
                initial="hide"
              >
                <motion.div variants={contentVariant}>{item.pane}</motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </TabContext.Provider>
  );
});

export default Tab;
