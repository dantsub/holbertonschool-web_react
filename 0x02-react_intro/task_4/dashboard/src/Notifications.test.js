import { render, screen } from '@testing-library/react';
import Notification from './Notifications';

describe('Test Notification.js', () => {
  it('Notification without crashing', async () => {
    await expect(render(<Notification />)).not.toThrow();
  });

  it('renders three list items', async () => {
    const { container } = await render(<Notification />);
    expect(container.querySelector('ul')).toBeInTheDocument();
    expect(container.querySelectorAll('li').length).toBe(3);
  });
});
