import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// All tests to be done as you would as a user
test('can count', () => {
  render(<App />);

  // Find the thing you need to test on
  const counterValue = screen.getByTestId('counter-value');
  const previousValue = parseInt(counterValue.textContent);

  // Fire events on the thing
  const incrementButton = screen.getByTestId('counter-increment-button');
  fireEvent.click(incrementButton);

  const currentValue = parseInt(counterValue.textContent);

  // assert that things changed the way you expected
  expect(currentValue - previousValue).toBe(1);
});
