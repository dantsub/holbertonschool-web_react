import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '@/actions/notificationActionTypes';
import { Map, setIn } from 'immutable';
import { notificationsNormalizer } from '@/schema/notifications';

export const initialState = Map({
  notifications: [],
  filter: "DEFAULT",
});

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const data = notificationsNormalizer(action.data);
      Object.values(data.notifications).map((notification) => {
        notification.isRead = false;
      });
      return state.merge(data);
    }
    case MARK_AS_READ:
      return setIn(state, ['notifications', String(action.index - 1), 'isRead'], true);
    case SET_TYPE_FILTER:
      return setIn(state, ['filter'], action.filter);
    default:
      return state;
  }
};

export default notificationReducer;
