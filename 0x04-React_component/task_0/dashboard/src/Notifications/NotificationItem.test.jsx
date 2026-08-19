import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('Test NotificationItem.js', () => {
  it('NotificationItem without crashing', () => {
    render(<NotificationItem />);
  });

  it('renders a li with the right content and attribute', () => {
    const { container } = render(<NotificationItem type="default" value="test" />);
    const li = container.querySelector('li');
    expect(li).toHaveTextContent('test');
    expect(li).toHaveAttribute('data-notification-type', 'default');
  });

  it('renders inner HTML', () => {
    const { container } = render(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(container.querySelector('li u')).toHaveTextContent('test');
  });
});