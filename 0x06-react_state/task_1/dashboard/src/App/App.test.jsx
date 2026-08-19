import React from 'react';
import { act } from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Test App.js', () => {
  let events = {};

  beforeEach(() => {
    events = {};
    // Define the addEventListener method with a mock function
    document.addEventListener = vi.fn((event, callback) => {
      events[event] = callback;
    });
  });

  it('App without crashing', () => {
    render(<App />);
  });

  it('check that CourseList is not displayed when isLoggedIn is false', () => {
    const { container } = render(<App />);
    expect(container.querySelector('#CourseList')).not.toBeInTheDocument();
  });

  it('check that CourseList is displayed and Login is not displayed when isLoggedIn is true', () => {
    const { container } = render(<App isLoggedIn={true} />);
    expect(container.querySelector('#CourseList')).toBeInTheDocument();
    expect(container.querySelector('input')).not.toBeInTheDocument();
  });

  it('verify that when the keys "control" and "h" are pressed the "logOut" function is called', () => {
    const logOut = vi.fn();
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<App logOut={logOut} />);
    act(() => {
      events.keydown({ keyCode: 72, ctrlKey: true });
    });
    expect(logOut).toHaveBeenCalled();
    alertSpy.mockRestore();
  });

  it('Has default state for displayDrawer false', () => {
    const { container } = render(<App />);
    expect(container.querySelector('#notifications')).not.toBeInTheDocument();
  });

  it('displayDrawer changes to true when clicking the menu item', () => {
    const { container } = render(<App />);
    fireEvent.click(container.querySelector('#menuItem'));
    expect(container.querySelector('#notifications')).toBeInTheDocument();
  });

  it('displayDrawer changes to false when clicking the close button', () => {
    const { container } = render(<App />);
    fireEvent.click(container.querySelector('#menuItem'));
    expect(container.querySelector('#notifications')).toBeInTheDocument();
    fireEvent.click(container.querySelector('#closeNotifications'));
    expect(container.querySelector('#notifications')).not.toBeInTheDocument();
  });
});