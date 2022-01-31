import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 element', () => {
  render(<App />);
  const h1Element = screen.getByText(/Person Database/i);
  expect(h1Element).toBeInTheDocument();
});
