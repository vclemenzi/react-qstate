import { useState, useEffect, Dispatch, SetStateAction } from "react";

function typeSafeParam<T>(param: string, initialState: T | (() => T)): T {
  if (typeof initialState === "number") {
    return parseInt(param) as T || initialState as T;
  } else if (typeof initialState === "boolean") {
    return Boolean(param) as T || initialState as T;
  } else {
    return param.toString() as T || initialState as T;
  }
}

function useQueryState<T>(name: string, initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>] {
  const url = new URL(window.location.href);
  const param = url.searchParams.get(name) as string;

  const initialValue = param ? typeSafeParam<T>(param, initialState) : initialState;

  const [val, setVal] = useState<T>(initialValue);

  useEffect(() => {
    url.searchParams.set(name, val as string);
    window.history.pushState({ path: url.href }, "", url.href);
  }, [name, val, url.searchParams, url.href]);

  return [val, setVal];
}

export { useQueryState };
