import React from 'react';
import { useToggle } from '../../hooks/useToggle';

export default function Toggle(): JSX.Element {
  const [isTextChanged, setIsTextChanged] = useToggle();

  return (
    <button onClick={setIsTextChanged}>
      {isTextChanged ? 'click' : 'notClicked'}
    </button>
  );
}
