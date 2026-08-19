import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

describe('Test Notification.js', () => {
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
  ];

  it('Notification without crashing', () => {
    render(<Notifications />);
  });

  it('renders three list items', () => {
    const { container } = render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(container.querySelectorAll('.Notifications li')).toHaveLength(3);
  });

  it('renders the right html', () => {
    const { container } = render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(container.querySelectorAll('.Notifications li')[0]).toHaveTextContent('New course available');
  });

  it('menu item is being displayed when displayDrawer is false', () => {
    const { container } = render(<Notifications />);
    expect(container.querySelector('.menuItem')).toBeInTheDocument();
  });

  it('Add a check that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const { container } = render(<Notifications />);
    expect(container.querySelector('.Notifications')).not.toBeInTheDocument();
  });

  it('Add a check that the div.Notifications is being displayed when displayDrawer is true', () => {
    const { container } = render(<Notifications displayDrawer={true} />);
    expect(container.querySelector('.Notifications')).toBeInTheDocument();
  });

  it('Verify that renders correctly if you pass an empty array or if you don’t pass the listNotifications', () => {
    const { container, rerender } = render(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(container.querySelectorAll('.Notifications li')).toHaveLength(1);
    rerender(<Notifications displayDrawer={true} />);
    expect(container.querySelectorAll('.Notifications li')).toHaveLength(1);
  });

  it('Verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', () => {
    const { container } = render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(container.querySelectorAll('.Notifications li')).toHaveLength(3);
  });

  it('Verify that when listNotifications is empty the message "Here is the list of notifications is not displayed", but "No new notification for now" is', () => {
    const { container } = render(<Notifications displayDrawer={true} />);
    expect(container.querySelector('.Notifications li')).toHaveTextContent('No new notification for now');
  });

  it('mockup the "console.log" function and Check that when calling the function "markAsRead" on an instance of the component', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const { container } = render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    fireEvent.click(container.querySelectorAll('.Notifications li')[0]);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    consoleSpy.mockRestore();
  });

  it('verify that when updating the props of the component with the same list, the component doesn’t rerender', () => {
    const shouldComponentUpdate = vi.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    const { rerender } = render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    rerender(<Notifications displayDrawer={true} listNotifications={[...listNotifications]} />);
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false);
    shouldComponentUpdate.mockRestore();
  });

  it('verify that when updating the props of the component with a longer list, the component does rerender', () => {
    const shouldComponentUpdate = vi.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    const updatedList = [...listNotifications, { id: 4, type: 'default', value: 'New notification' }];
    const { rerender } = render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    rerender(<Notifications displayDrawer={true} listNotifications={updatedList} />);
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true);
    shouldComponentUpdate.mockRestore();
  });
});