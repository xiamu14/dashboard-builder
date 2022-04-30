import { useMediaQuery } from "react-responsive";

export function useMobile() {
  const isMobile = useMediaQuery({
    query: "(max-width: 786px)",
  });
  return isMobile;
}
