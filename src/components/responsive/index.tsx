import { useMobile } from "@src/hooks/use_responsive";

interface Props {
  mobile: JSX.Element;
  desktop: JSX.Element;
}

export default function Responsive({ mobile, desktop }: Props) {
  const isMobile = useMobile();
  console.log(
    "%c debug isMobile",
    "background: #69c0ff; color: white; padding: 4px",
    isMobile
  );

  if (isMobile === undefined) return null;
  if (isMobile) return mobile;
  // TODO: tablet
  return desktop;
}
