import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('Test CourseListRow.js', () => {
  it('CourseListRow without crashing', () => {
    render(<CourseListRow textFirstCell="test" />);
  });

  it('renders isHeader is True and render with one th', () => {
    const { container } = render(<CourseListRow isHeader={true} textFirstCell="test" />);
    expect(container.querySelectorAll('th')).toHaveLength(1);
    expect(container.querySelector('th')).toHaveAttribute('colspan', '2');
  });

  it('renders isHeader is True and render with two th', () => {
    const { container } = render(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test" />);
    expect(container.querySelectorAll('th')).toHaveLength(2);
  });

  it('renders isHeader is False and with two td', () => {
    const { container } = render(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);
    expect(container.querySelectorAll('td')).toHaveLength(2);
  });

  it('renders a checkbox in the first cell when not a header', () => {
    const { container } = render(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);
    expect(container.querySelector('input[type=checkbox]')).toBeInTheDocument();
  });

  it('the checkbox toggles when clicked', () => {
    const { container } = render(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);
    const checkbox = container.querySelector('input[type=checkbox]');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});