import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Test Footer.jsx', () => {
    it('renders footer with class App-footer', () => {
        const { container } = render(<Footer />);
        expect(container.querySelector('.App-footer')).toBeInTheDocument();
    });
});