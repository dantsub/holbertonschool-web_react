import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('Test NotificationItem.js', () => {
  it('NotificationItem without crashing', () => {
    render(<NotificationItem id={1} />);
  });

  it('renders a li with the right content and attribute', () => {
    const { container } = render(<NotificationItem type="default" value="test" id={1} />);
    const li = container.querySelector('li');
    expect(li).toHaveTextContent('test');
    expect(li).toHaveAttribute('data-notification-type', 'default');
  });

  it('renders inner HTML', () => {
    const { container } = render(<NotificationItem html={{ __html: '<u>test</u>' }} id={1} />);
    expect(container.querySelector('li u')).toHaveTextContent('test');
  });

  it('check when simulating a click on the component, the spy is called with the right ID argument', () => {
    const markAsRead = vi.fn();
    const { container } = render(<NotificationItem type="default" value="test" id={1} markAsRead={markAsRead} />);
    fireEvent.click(container.querySelector('li'));
    expect(markAsRead).toHaveBeenCalledWith(1);
  });
});
