import { useState, useEffect } from 'react';

export function useLocalStorage(storageKey, defaultValue = '') {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(storageKey)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state, storageKey]);

  return [state, setState];
}
