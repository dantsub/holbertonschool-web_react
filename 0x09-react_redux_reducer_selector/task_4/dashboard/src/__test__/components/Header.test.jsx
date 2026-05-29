import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

describe('Test Header.jsx', () => {
    it('renders header with class App', () => {
        const { container } = render(<Header />);
        expect(container.querySelector('.App-header')).toBeInTheDocument();
    });
});