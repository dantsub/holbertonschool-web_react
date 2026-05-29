import { render, screen } from '@testing-library/react';
import Login from '@/components/Login';

describe('Test Login.jsx', () => {
    it('renders inputs field', () => {
        render(<Login />);
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });
});