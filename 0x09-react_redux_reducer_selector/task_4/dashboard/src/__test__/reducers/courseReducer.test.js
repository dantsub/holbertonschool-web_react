import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '@/actions/courseActionTypes';
import { expect } from 'vitest';
import { courseReducer } from '@/reducers/courseReducer';
import { Map, fromJS } from 'immutable';
import { coursesNormalizer } from '@/schema/courses';

describe('courseReducer', () => {
  const state = fromJS(coursesNormalizer([
    { id: 1, name: 'ES6', isSelected: false, credit: 60 },
    { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
    { id: 3, name: 'React', isSelected: false, credit: 40 }
  ]));

  const data = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  const setSelection = (normalizedData, id, isSelected) => {
    Object.values(normalizedData).map((course) => {
      if (course.id === id) {
        course.isSelected = isSelected;
      }
    });
    return normalizedData;
  };

  it('returns an empty array for the default state', () => {
    const result = courseReducer(undefined, {});
    expect(result).toEqual(Map([]));
  });

  it('handles FETCH_COURSE_SUCCESS by setting isSelected false on each course', () => {
    const result = courseReducer(Map([]), { type: FETCH_COURSE_SUCCESS, data });
    const expected = coursesNormalizer(data.map((course) => ({ ...course, isSelected: false })));
    expect(result.toJS()).toEqual(expected);
  });

  it('handles SELECT_COURSE by updating the correct course', () => {
    const result = courseReducer(state, { type: SELECT_COURSE, index: 2 });
    const expected = setSelection(state.toJS(), 2, true);
    expect(result.toJS()).toEqual(expected);
  });

  it('handles UNSELECT_COURSE by updating the correct course', () => {
    const selectedState = courseReducer(state, { type: SELECT_COURSE, index: 2 });
    const result = courseReducer(selectedState, { type: UNSELECT_COURSE, index: 2 });
    const expected = setSelection(state.toJS(), 2, false);
    expect(result.toJS()).toEqual(expected);
  });
});
