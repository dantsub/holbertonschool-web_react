import { render, screen } from '@testing-library/react';
import NotificationItem from '@/components/Notifications/NotificationItem';

describe('Test NotificationItem.jsx', () => {
  it('renders NotificationItem without crashing', () => {
    render(<NotificationItem type="default">Test</NotificationItem>);
    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });
});