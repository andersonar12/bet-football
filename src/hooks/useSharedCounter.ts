import { useCallback, useState } from "react";
import { useBetween } from "use-between";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const inc = useCallback(() => setCount((c) => c + 1), []);
  const dec = useCallback(() => setCount((c) => c - 1), []);
  return {
    count,
    inc,
    dec
  };
};

const useSharedCounter = () => useBetween(useCounter);

export { useSharedCounter }