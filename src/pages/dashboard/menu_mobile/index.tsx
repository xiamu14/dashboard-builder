import Navigation from "@src/components/navigation";
import { useDimensions } from "@src/hooks/use_dimensions";
import { menuSiderAtom } from "@src/recoil/menu_mobile";
import { motion } from "framer-motion";
import { CloseLight } from "maple-icons";
import React, { useCallback, useRef } from "react";
import { useRecoilState } from "recoil";
import "./index.scoped.scss";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function MenuMobile() {
  const [isOpen, setIsOpen] = useRecoilState(menuSiderAtom);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const toggleOpen = useCallback(() => {
    setIsOpen((it) => !it);
  }, [setIsOpen]);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="dashboard-sider" variants={sidebar}>
        <div className="header flex justify-around items-center">
          <CloseLight width={16} height={16} onClick={() => toggleOpen()} />
          <div />
          <div className="sider-logo" />
        </div>
        <div className="navigation-box">
          <Navigation />
        </div>
      </motion.div>
    </motion.div>
  );
}
