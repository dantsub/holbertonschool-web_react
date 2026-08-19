import React from 'react';
import { render } from '@testing-library/react';
import App from '../App/App';
import Login from './Login';

describe('Test Login.js', () => {
  it('Login without crashing', () => {
    render(<Login />);
  });

  it('div with the class App-body', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App-body')).toBeInTheDocument();
  });

  it('renders 2 inputs and 2 labels', () => {
    const { container } = render(<Login />);
    expect(container.querySelectorAll('input')).toHaveLength(2);
    expect(container.querySelectorAll('label')).toHaveLength(2);
  });
});