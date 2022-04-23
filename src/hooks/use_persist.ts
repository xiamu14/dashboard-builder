import { useCallback, useRef } from "react";

const usePersist = <T>(initValue: T) => {
  const ref = useRef(initValue);

  const getValue = useCallback(() => {
    return ref.current;
  }, []);

  const setValue = useCallback((v) => {
    if (typeof v === "function") {
      ref.current = v(ref.current);
      return;
    }

    ref.current = v;
  }, []);

  return [getValue, setValue] as const;
};

export default usePersist;
