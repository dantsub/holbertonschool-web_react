import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('Test CourseList.js', () => {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  it('CourseList without crashing', () => {
    render(<CourseList />);
  });

  it('renders 5 different rows', () => {
    const { container } = render(<CourseList listCourses={listCourses} />);
    expect(container.querySelectorAll('#CourseList tr')).toHaveLength(5);
  });

  it('Verify that CourseList renders correctly if you pass an empty array or if you don’t pass the listCourses property', () => {
    const { container, rerender } = render(<CourseList listCourses={[]} />);
    expect(container.querySelectorAll('#CourseList tr')).toHaveLength(3);
    rerender(<CourseList />);
    expect(container.querySelectorAll('#CourseList tr')).toHaveLength(3);
  });

  it('verify that when you pass a list of courses, the component renders it correctly', () => {
    const { container } = render(<CourseList listCourses={listCourses} />);
    const rows = container.querySelectorAll('#CourseList tr');
    expect(rows[0].firstElementChild).toHaveAttribute('colspan', '2');
    expect(rows).toHaveLength(5);
  });
});