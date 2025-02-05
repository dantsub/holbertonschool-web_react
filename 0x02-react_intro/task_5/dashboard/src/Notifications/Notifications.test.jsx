import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Test Notification.js', () => {
  it('Notification without crashing', () => {
    render(<Notifications />);
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
  });

  it('renders three list items', () => {
    render(<Notifications />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
