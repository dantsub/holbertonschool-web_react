interface CourseRowProps {
    children?: React.ReactNode;
}

export default function CourseRow({ children }: CourseRowProps) {
    return (
        <tr>{children}</tr>
    );
}