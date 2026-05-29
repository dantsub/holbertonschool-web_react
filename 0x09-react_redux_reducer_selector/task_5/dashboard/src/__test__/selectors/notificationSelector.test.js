import { filterTypeSelected, getNotifications, getUnreadNotifications } from '@/selectors/notificationSelector';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ } from '@/actions/notificationActionTypes';
import { notificationsNormalizer } from '@/schema/notifications';
import { notificationReducer } from '@/reducers/notificationReducer';
import { expect } from 'vitest';
import { fromJS } from 'immutable';

describe('Test notificationSelector.js', () => {
  const data = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", value: "New data available" }
  ];

  const state = fromJS({
    filter: "DEFAULT",
    notifications: notificationsNormalizer([
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" }
    ]).notifications
  });

  it('Test filterTypeSelected function', () => {
    const result = filterTypeSelected(notificationReducer(undefined, {}));
    expect(result).toEqual('DEFAULT');
  });

  it('Test getNotifications function', () => {
    const result = getNotifications(notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data: data }));
    const expected = notificationsNormalizer([
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" }
    ]);
    expect(result).toEqual(expected.notifications);
  });

  it('Test getUnreadNotifications function', () => {
    const result = getUnreadNotifications(notificationReducer(state, { type: MARK_AS_READ, index: 3 }));
    const expected = [
      { id: 2, isRead: true, type: 'urgent', value: 'New resume available' }
    ];
    expect(result).toEqual(expected);
  });
});
