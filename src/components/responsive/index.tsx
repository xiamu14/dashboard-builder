import { useMobile } from "@src/hooks/use_responsive";
import React, { ReactNode } from "react";

interface Props {
  mobile: ReactNode;
  desktop: ReactNode;
}

export default function Responsive({ mobile, desktop }: Props) {
  const isMobile = useMobile();
  console.log(
    "%c debug isMobile",
    "background: #69c0ff; color: white; padding: 4px",
    isMobile
  );

  if (isMobile === undefined) return null;
  if (isMobile) return <div>{mobile}</div>;
  // TODO: tablet
  return <div>{desktop}</div>;
}
