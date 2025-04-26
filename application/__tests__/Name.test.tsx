import { render, screen } from '@testing-library/react';
import Name from '../Name';

jest.mock('../../caching-fetch-library/cachingFetch', () => ({
  useCachingFetch: jest.fn().mockReturnValue({
    data: [{ id: 1, name: 'John Doe' }],
    isLoading: false,
    error: null
  })
}));

jest.mock('../validation', () => ({
  validateData: jest.fn().mockReturnValue({
    1: {
      first: 'John',
      last: 'Doe',
    }
  })
}));

test('renders Name component with heading element', () => {
  render(<Name index={1} />)
  expect(screen.getByTestId('heading'))
    .toBeInTheDocument();
  expect(screen.getByTestId('heading'))
    .toHaveTextContent('John Doe');
});