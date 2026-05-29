import { uiReducer } from '@/reducers/uiReducer';
import { expect } from 'vitest';

describe('Test notifications.js', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it('test verifying the state returned by the uiReducer function equals the initial state when no action is passed', () => {
    const result = uiReducer(initialState, '');
    expect(result).toEqual(initialState);
  });

  it('est verifying the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
    const result = uiReducer(initialState, 'SELECT_COURSE');
    expect(result).toEqual(initialState);
  });

  it('test verifying the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    const result = uiReducer(initialState, { type: 'DISPLAY_NOTIFICATION_DRAWER' });
    expect(result.isNotificationDrawerVisible).toBe(true);
  });
});
