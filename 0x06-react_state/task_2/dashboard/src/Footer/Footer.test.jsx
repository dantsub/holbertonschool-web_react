import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Test Footer.js', () => {
  it('Footer without crashing', () => {
    render(<Footer />);
  });

  it('renders a footer element', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('renders Copyright text', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toHaveTextContent(/Copyright/);
  });
});