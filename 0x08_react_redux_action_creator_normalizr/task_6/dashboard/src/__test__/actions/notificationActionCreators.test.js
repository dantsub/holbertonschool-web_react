import { MARK_AS_READ, SET_TYPE_FILTER } from '@/actions/notificationActionTypes';
import { markAsRead, setNotificationFilter } from '@/actions/notificationActionCreators';
import { expect } from 'vitest';

describe('Test notificationActionCreators.js', () => {
  it('test for markAsRead' , () => {
    const data = markAsRead(1);
    const result = { type: MARK_AS_READ, index: 1 };    
    expect(data).toEqual(result);
  });

  it('test for setNotificationFilter', () => {
    const data = setNotificationFilter('DEFAULT');
    const result = { type: SET_TYPE_FILTER, filter: 'DEFAULT' };    
    expect(data).toEqual(result);
  });
});
