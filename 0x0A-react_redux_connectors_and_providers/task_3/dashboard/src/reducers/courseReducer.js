import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '@/actions/courseActionTypes';
import { coursesNormalizer } from '@/schema/courses';
import { Map } from 'immutable';

const initialState = Map([]);

export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS: {
            const normalizedData = coursesNormalizer(action.data);
            Object.values(normalizedData).map((course) => {
                course.isSelected = false;
            });
            return state.merge(normalizedData);
        }
        case SELECT_COURSE:
            return state.setIn([String(action.index), "isSelected"], true);
        case UNSELECT_COURSE:
            return state.setIn([String(action.index), "isSelected"], false);
        default:
            return state;
    }
};