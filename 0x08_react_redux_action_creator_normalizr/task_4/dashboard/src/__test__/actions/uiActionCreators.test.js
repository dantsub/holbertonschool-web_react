import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '@/actions/uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from '@/actions/uiActionCreators';
import { expect } from 'vitest';

describe('Test uiActionCreators.js', () => {
  it('test for LOGIN' , () => {
    const data = login('test@test.com', 'test');
    const result = { type: LOGIN, user: { email: 'test@test.com', password: 'test' } };
    expect(data).toEqual(result);
  });

  it('test for LOGOUT', () => {
    const data = logout(1);
    const result = { type: LOGOUT };
    expect(data).toEqual(result);
  });

  it('test for DISPLAY_NOTIFICATION_DRAWER', () => {
    const data = displayNotificationDrawer(1);
    const result = { type: DISPLAY_NOTIFICATION_DRAWER };
    expect(data).toEqual(result);
  });

  it('test for HIDE_NOTIFICATION_DRAWER', () => {
    const data = hideNotificationDrawer(1);
    const result = { type: HIDE_NOTIFICATION_DRAWER };
    expect(data).toEqual(result);
  });
});
