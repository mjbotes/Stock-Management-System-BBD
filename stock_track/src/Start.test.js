import React from 'react';
import { render } from '@testing-library/react';
import Start from './Start';

test('renders learn react link', () => {
  const { getByText } = render(<Start />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
