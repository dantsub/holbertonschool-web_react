import { selectCourse, unSelectCourse } from '@/actions/courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from '@/actions/courseActionTypes';
import { expect } from 'vitest'

describe('Test courseActionCreators.js', () => {
  it('test for the selectCourse action. Calling the creator with 1 as argument should return: "{ type: SELECT_COURSE, index: 1 }"' , () => {
    const data = selectCourse(1);
    const result = { type: SELECT_COURSE, index: 1 };
    expect(data).toEqual(result);
  });

  it('test for the unSelectCourse action. Calling the creator with 1 as argument should return: "{ type: UNSELECT_COURSE, index: 1 }"', () => {
    const data = unSelectCourse(1);
    const result = { type: UNSELECT_COURSE, index: 1 };
    expect(data).toEqual(result);
  });
});