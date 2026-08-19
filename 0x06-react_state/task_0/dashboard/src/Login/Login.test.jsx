import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

describe('Test Login.js', () => {
  it('Login without crashing', () => {
    render(<Login />);
  });

  it('renders 2 inputs and 2 labels', () => {
    const { container } = render(<Login />);
    expect(container.querySelectorAll('input')).toHaveLength(2);
    expect(container.querySelectorAll('label')).toHaveLength(2);
  });
});