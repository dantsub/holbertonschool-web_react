import { render, screen } from '@testing-library/react';
import Login from '@/components/Login';

describe('Test Login.jsx', () => {
    it('renders Login with class App-body', () => {
        const { container } = render(<Login />);
        expect(container.querySelector('.App-body')).toBeInTheDocument();
    });
    it('renders inputs field', () => {
        render(<Login />);
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });
});