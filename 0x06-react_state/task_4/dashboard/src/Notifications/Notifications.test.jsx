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
    expect(container.querySelectorAll('#notifications li')).toHaveLength(3);
  });

  it('renders the right html', () => {
    const { container } = render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(container.querySelectorAll('#notifications li')[0]).toHaveTextContent('New course available');
  });

  it('menu item is being displayed when displayDrawer is false', () => {
    const { container } = render(<Notifications />);
    expect(container.querySelector('#menuItem')).toBeInTheDocument();
  });

  it('div#notifications is not being displayed when displayDrawer is false', () => {
    const { container } = render(<Notifications />);
    expect(container.querySelector('#notifications')).not.toBeInTheDocument();
  });

  it('div#notifications is being displayed when displayDrawer is true', () => {
    const { container } = render(<Notifications displayDrawer={true} />);
    expect(container.querySelector('#notifications')).toBeInTheDocument();
  });

  it('renders correctly if you pass an empty array or if you don`t pass the listNotifications', () => {
    const { container, rerender } = render(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(container.querySelectorAll('#notifications li')).toHaveLength(1);
    rerender(<Notifications displayDrawer={true} />);
    expect(container.querySelectorAll('#notifications li')).toHaveLength(1);
  });

  it('when listNotifications is empty, "No new notification for now" is displayed', () => {
    const { container } = render(<Notifications displayDrawer={true} />);
    expect(container.querySelector('#notifications li')).toHaveTextContent('No new notification for now');
  });

  it('clicking a notification item calls markNotificationAsRead with the right id', () => {
    const markNotificationAsRead = vi.fn();
    const { container } = render(
      <Notifications displayDrawer={true} listNotifications={listNotifications} markNotificationAsRead={markNotificationAsRead} />
    );
    fireEvent.click(container.querySelectorAll('#notifications li')[0]);
    expect(markNotificationAsRead).toHaveBeenCalledWith(1);
  });

  it('clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = vi.fn();
    const handleHideDrawer = vi.fn();
    const { container } = render(
      <Notifications handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />
    );
    fireEvent.click(container.querySelector('#menuItem'));
    expect(handleDisplayDrawer).toHaveBeenCalled();
    expect(handleHideDrawer).not.toHaveBeenCalled();
  });

  it('clicking on the button calls handleHideDrawer', () => {
    const handleDisplayDrawer = vi.fn();
    const handleHideDrawer = vi.fn();
    const { container } = render(
      <Notifications displayDrawer={true} handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />
    );
    fireEvent.click(container.querySelector('#closeNotifications'));
    expect(handleDisplayDrawer).not.toHaveBeenCalled();
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});