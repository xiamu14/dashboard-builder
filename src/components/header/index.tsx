import HeaderDesktop from "@src/components/header/desktop";
import HeaderMobile from "@src/components/header/mobile";
import Responsive from "@src/components/responsive";
import React from "react";

const Header = () => {
  return <Responsive mobile={<HeaderMobile />} desktop={<HeaderDesktop />} />;
};

export default React.memo(Header);
