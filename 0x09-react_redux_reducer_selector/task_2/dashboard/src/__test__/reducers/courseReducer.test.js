import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '@/actions/courseActionTypes';
import { expect } from 'vitest';
import { courseReducer } from '@/reducers/courseReducer';

describe('courseReducer', () => {
  const state = [
    { id: 1, name: 'ES6', isSelected: false, credit: 60 },
    { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
    { id: 3, name: 'React', isSelected: false, credit: 40 }
  ];

  const data = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  const setSelection = (courses, id, isSelected) =>
    courses.map((course) =>
      course.id === id ? { ...course, isSelected } : course
    );

  it('returns an empty array for the default state', () => {
    const result = courseReducer(undefined, {});
    expect(result).toEqual([]);
  });

  it('handles FETCH_COURSE_SUCCESS by setting isSelected false on each course', () => {
    const result = courseReducer([], { type: FETCH_COURSE_SUCCESS, data });
    const expected = data.map((course) => ({ ...course, isSelected: false }));
    expect(result).toEqual(expected);
  });

  it('handles SELECT_COURSE by updating the correct course', () => {
    const result = courseReducer(state, { type: SELECT_COURSE, index: 2 });
    const expected = setSelection(state, 2, true);
    expect(result).toEqual(expected);
  });

  it('handles UNSELECT_COURSE by updating the correct course', () => {
    const selectedState = courseReducer(state, { type: SELECT_COURSE, index: 2 });
    const result = courseReducer(selectedState, { type: UNSELECT_COURSE, index: 2 });
    const expected = setSelection(state, 2, false);
    expect(result).toEqual(expected);
  });
});
