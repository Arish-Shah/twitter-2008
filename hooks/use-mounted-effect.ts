import {
  useEffect,
  useRef,
  type DependencyList,
  type EffectCallback,
} from "react";

export function useMountedEffect(effect: EffectCallback, deps: DependencyList) {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (mountedRef.current) {
      return effect();
    }
    // eslint-disable-next-line
  }, deps);

  useEffect(() => {
    mountedRef.current = true;
  }, []);
}
