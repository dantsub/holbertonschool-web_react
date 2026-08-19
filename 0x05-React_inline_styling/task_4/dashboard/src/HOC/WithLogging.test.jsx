import React from 'react';
import { render } from '@testing-library/react';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('Test WithLogging.js', () => {
  it('console.log was called on mount and on unmount with Component when the wrapped element is pure html', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const WrapElement = WithLogging(() => <a></a>);
    const { unmount } = render(<WrapElement />);
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');
    unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
    consoleSpy.mockRestore();
  });

  it('console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component.', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const WrapElement = WithLogging(Login);
    const { unmount } = render(<WrapElement />);
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');
    unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
    consoleSpy.mockRestore();
  });
});
