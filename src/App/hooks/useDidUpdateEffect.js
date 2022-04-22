import { useEffect, useRef } from "react";

const useDidUpdateEffect = (effect, dependencies) => {
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) {
      const unmount = effect();
      return () => unmount && unmount();
    } else {
      mounted.current = true;
    }
  }, dependencies);

  useEffect(() => {
    return () => (mounted.current = false);
  }, []);
};

export default useDidUpdateEffect;
