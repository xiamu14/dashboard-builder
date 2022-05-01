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
  title: string;
}

const ContentBox = React.memo(
  ({ title, children }: React.PropsWithChildren<Props>) => {
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
          <div className="content-wrapper">
            <div className="content-title">{title}</div>
            <div className="content">{children}</div>
          </div>
        </div>
      </motion.div>
    );
  }
);

export default ContentBox;
