import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test App.js', () => {
  it('App without crashing', () => {
    render(<App />)
    expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
  });

  it('renders header with class App-header', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App-header')).toBeInTheDocument();
  });

  it('renders body with class App-body', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App-body')).toBeInTheDocument();
  });

  it('renders footer with class App-footer', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App-footer')).toBeInTheDocument();
  });
});
