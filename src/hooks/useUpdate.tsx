import {useEffect, useRef} from "react";

const useUpdate = (fn: () => void, deps: any[]) => {
  const count = useRef(0);
  useEffect(() => {
    count.current++;
  });
  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
  }, deps);
}

export default useUpdate;
