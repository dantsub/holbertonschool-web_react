import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test App.js', () => {
  it('App without crashing', async () => {
    await expect(render(<App />)).not.toThrow();
  });

  it('renders header with class App-header', async () => {
    const { container } = await render(<App />);
    expect(container.querySelector('.App-header')).toBeInTheDocument();
  });

  it('renders body with class App-body', async () => {
    const { container } = await render(<App />);
    expect(container.querySelector('.App-body')).toBeInTheDocument();
  });

  it('renders footer with class App-footer', async () => {
    const { container } = await render(<App />);
    expect(container.querySelector('.App-footer')).toBeInTheDocument();
  });
});
