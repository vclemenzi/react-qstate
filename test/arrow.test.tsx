import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useQueryState } from '../src/index';

function TestComponent() {
  const [counter, setCounter] = useQueryState("counter", () => { return 0; });

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

test('does the url update (arrow)', () => {
  const { getByText } = render(<TestComponent />);
  const incrementButton = getByText('Increment');

  fireEvent.click(incrementButton);

  expect(new URL(window.location.href).searchParams.get("counter")).toBe('1');
});
