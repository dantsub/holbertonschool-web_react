import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '@/actions/notificationActionTypes';
import { notificationReducer } from '@/reducers/notificationReducer';
import { expect } from 'vitest';

describe('Test notificationReducer.js', () => {
  const initialState = {
    notifications: [],
    filter: 'DEFAULT',
  };

  const data = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New data available' }
  ];

  const defaultNotifications = [
    { id: 1, isRead: false, type: 'default', value: 'New course available' },
    { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
    { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
  ];

  const state = {
    filter: 'DEFAULT',
    notifications: defaultNotifications,
  };

  it('Test that the default state returns the initialState', () => {
    const result = notificationReducer(undefined, {});

    expect(result).toEqual(initialState);
  });

  it('Test that FETCH_NOTIFICATIONS_SUCCESS returns the data passed with isRead in false', () => {
    const result = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data });

    expect(result.notifications).toEqual(defaultNotifications);
    expect(result.filter).toEqual(initialState.filter);
  });

  it('Test that MARK_AS_READ returns the data passed with index passed in true', () => {
    const result = notificationReducer(state, { type: MARK_AS_READ, index: 2 });
    const expected = [
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    ];

    expect(result.notifications).toEqual(expected);
    expect(result.filter).toEqual(state.filter);
  });

  it('Test that SET_TYPE_FILTER returns the data passed with the filter passed', () => {
    const result = notificationReducer(state, { type: SET_TYPE_FILTER, filter: 'URGENT' });

    expect(result.notifications).toEqual(defaultNotifications);
    expect(result.filter).toEqual('URGENT');
  });
});
