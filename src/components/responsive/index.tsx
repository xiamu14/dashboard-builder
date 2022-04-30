import { useMobile } from "@src/hooks/use_responsive";
import React, { ReactNode } from "react";

interface Props {
  mobileView: ReactNode;
}

export default function Responsive({
  children,
  mobileView,
}: React.PropsWithChildren<Props>) {
  const isMobile = useMobile();
  console.log(
    "%c debug isMobile",
    "background: #69c0ff; color: white; padding: 4px",
    isMobile
  );

  if (isMobile === undefined) return null;
  if (isMobile) return <div>{mobileView}</div>;
  return <div>{children}</div>;
}
