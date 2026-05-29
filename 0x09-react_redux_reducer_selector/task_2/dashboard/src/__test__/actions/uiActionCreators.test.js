import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from '@/actions/uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from '@/actions/uiActionCreators';
import { expect, beforeEach, vi } from 'vitest';

describe('Test uiActionCreators.js', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

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

  it('test should verify that if the API returns the right response, the store received two actions "LOGIN" and "LOGIN_SUCCESS"', async () => {
    const dispatchSpy = vi.fn();

    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => ({}),
    });

    await loginRequest("test@test.com", "test")(dispatchSpy);

    expect(dispatchSpy).toHaveBeenCalledTimes(2);
    expect(dispatchSpy).toHaveBeenCalledWith({ type: LOGIN, user: { email: 'test@test.com', password: 'test' } });
    expect(dispatchSpy).toHaveBeenCalledWith({ type: LOGIN_SUCCESS });
  });

  it('test should verify that if the API query fails, the store received two actions "LOGIN" and "LOGIN_FAILURE"', async () => {
    const dispatchSpy = vi.fn();

    vi.spyOn(global, 'fetch').mockRejectedValue(new Error('API Error'));

    await loginRequest("test@test.com", "test")(dispatchSpy);

    expect(dispatchSpy).toHaveBeenCalledTimes(2);
    expect(dispatchSpy).toHaveBeenNthCalledWith(1, { 
      type: LOGIN, 
      user: { email: 'test@test.com', password: 'test' } 
    });
    expect(dispatchSpy).toHaveBeenNthCalledWith(2, { type: LOGIN_FAILURE });
  });
});
