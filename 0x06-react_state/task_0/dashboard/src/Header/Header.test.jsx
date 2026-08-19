import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Test Header.js', () => {
  it('Header without crashing', () => {
    render(<Header />);
  });

  it('renders a header element', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('header')).toBeInTheDocument();
  });

  it('renders 1 img and 1 h1', () => {
    const { container } = render(<Header />);
    expect(container.querySelectorAll('img')).toHaveLength(1);
    expect(container.querySelectorAll('h1')).toHaveLength(1);
  });
});