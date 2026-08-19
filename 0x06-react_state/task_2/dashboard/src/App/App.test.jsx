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

  it('test to verify that the logIn function updates the state correctly', () => {
    const { container } = render(<App />);
    fireEvent.change(container.querySelector('#email'), { target: { value: 'test@test.com' } });
    fireEvent.change(container.querySelector('#password'), { target: { value: 'test' } });
    fireEvent.submit(container.querySelector('form'));
    expect(container.querySelector('#CourseList')).toBeInTheDocument();
  });

  it('test to verify that the logOut function updates the state correctly when pressing control+h', () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    const { container } = render(<App />);
    fireEvent.change(container.querySelector('#email'), { target: { value: 'test@test.com' } });
    fireEvent.change(container.querySelector('#password'), { target: { value: 'test' } });
    fireEvent.submit(container.querySelector('form'));
    expect(container.querySelector('#CourseList')).toBeInTheDocument();
    act(() => {
      events.keydown({ keyCode: 72, ctrlKey: true });
    });
    expect(container.querySelector('#CourseList')).not.toBeInTheDocument();
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