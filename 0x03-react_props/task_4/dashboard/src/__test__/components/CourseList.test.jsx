import CourseList from '@/components/CourseList';
import { render, screen } from '@testing-library/react';

describe('Test CourseList.jsx', () => {
    it('renders CourseList without crashing', () => {
        render(<CourseList />);
        expect(screen.getByText(/Available courses/i)).toBeInTheDocument(); 
        expect(screen.getByText(/Course name/i)).toBeInTheDocument();
        expect(screen.getByText(/Credit/i)).toBeInTheDocument();
    });
});