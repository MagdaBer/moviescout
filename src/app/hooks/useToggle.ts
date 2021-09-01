import { useState } from 'react';

export function useToggle(): [boolean, () => void] {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}
