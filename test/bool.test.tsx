import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useQueryState } from '../src/index';

function TestComponent() {
  const [bool, setBool] = useQueryState("bool", true);

  const handleClick = () => {
    setBool(!bool);
  };

  return (
    <div>
      <p>Val: {bool}</p>
      <button onClick={handleClick}>Invert</button>
    </div>
  );
}

test('does the url update for booleans', () => {
  const { getByText } = render(<TestComponent />);
  const incrementButton = getByText('Invert');

  fireEvent.click(incrementButton);

  expect(new URL(window.location.href).searchParams.get("bool")).toBe('false');
});
