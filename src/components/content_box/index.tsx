import Header from "@src/components/header";
import { motion } from "framer-motion";
import React from "react";
import "./index.scoped.scss";

const transition = { type: "spring", duration: 0.5 };

const motionVariants = {
  initial: { scale: 0.75, opacity: 0.2 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.75,
    opacity: 0.2,
    transition,
  },
};

interface Props {
  title?: string;
  className?: string;
  banner?: string;
}

const ContentBox = React.memo(
  ({
    title = "",
    className = "",
    banner,
    children,
  }: React.PropsWithChildren<Props>) => {
    return (
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={motionVariants}
        className="motion-wrapper"
      >
        <div className="content-box">
          <Header />
          {!banner ? (
            <div className={`content-wrapper ${className}`}>
              <div className="content-title">{title}</div>
              <div className="content">{children}</div>
            </div>
          ) : (
            <div className={`banner-wrapper ${className}`}>
              <img src={banner} className="banner" />
              <div className="content">{children}</div>
            </div>
          )}
        </div>
      </motion.div>
    );
  }
);

export default ContentBox;
