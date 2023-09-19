import { useState, useEffect, Dispatch, SetStateAction } from "react";

function useQueryState<T>(name: string, initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>] {
  const url = new URL(window.location.href);

  const [val, setVal] = useState(() => {
    if (typeof initialState == "number") {
      return parseInt(url.searchParams.get(name) || "") as T || initialState as T;
    } else if (typeof initialState == "boolean") {
      return Boolean(url.searchParams.get(name) || "") as T || initialState as T;
    }

    return url.searchParams.get(name) as T || initialState as T;
  });

  useEffect(() => {
    url.searchParams.set(name, val as string);
    window.history.pushState({ path: url.href }, "", url.href);
  }, [name, val]);

  return [val, setVal];
}

export { useQueryState };
