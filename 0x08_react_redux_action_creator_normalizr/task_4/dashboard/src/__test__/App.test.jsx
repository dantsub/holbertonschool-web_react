import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Test App.jsx', () => {
  it('App without crashing', () => {
    render(<App />)
    expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
  });
});
