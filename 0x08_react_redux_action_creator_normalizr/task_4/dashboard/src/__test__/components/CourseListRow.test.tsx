import CourseListRow from '@/components/CourseList/CourseListRow';
import { render, screen } from '@testing-library/react';

const table = ({ children } : { children: React.ReactNode }) => {
    return (
        <table>
            <thead>
                {children}
            </thead>
        </table>
    )
}

describe('CourseListRow component', () => {
    it('renders correctly row', () => {
        render(table({ children: <CourseListRow><td>test</td></CourseListRow> }));
        expect(screen.getByText(/test/i)).toBeInTheDocument();
    });
});