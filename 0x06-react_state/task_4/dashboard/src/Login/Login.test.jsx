import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Test Login.js', () => {
  it('Login without crashing', () => {
    render(<Login />);
  });

  it('renders 3 inputs and 2 labels', () => {
    const { container } = render(<Login />);
    expect(container.querySelectorAll('input')).toHaveLength(3);
    expect(container.querySelectorAll('label')).toHaveLength(2);
  });

  it('verify that the submit button is disabled by default', () => {
    const { container } = render(<Login />);
    expect(container.querySelector('input[type=submit]')).toBeDisabled();
  });

  it('verify that after changing the value of the two inputs, the button is enabled', () => {
    const { container } = render(<Login />);
    fireEvent.change(container.querySelector('#email'), { target: { value: 'test@test.com' } });
    fireEvent.change(container.querySelector('#password'), { target: { value: 'test' } });
    expect(container.querySelector('input[type=submit]')).not.toBeDisabled();
  });
});