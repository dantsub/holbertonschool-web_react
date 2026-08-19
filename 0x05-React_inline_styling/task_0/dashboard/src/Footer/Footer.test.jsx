import React from 'react';
import { render } from '@testing-library/react';
import App from '../App/App';
import Footer from './Footer';

describe('Test Footer.js', () => {
  it('Footer without crashing', () => {
    render(<Footer />);
  });

  it('div with the class App-footer', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App-footer')).toBeInTheDocument();
  });

  it('renders Copyright text', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('.App-footer')).toHaveTextContent(/Copyright/);
  });
});