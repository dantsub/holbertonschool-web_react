import { getLatestNotification, getFullYear, getFooterCopy } from './utils';

describe('Test Utils.js', () => {
  it('Function getFullYear', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });

  it('Function getFooterCopy', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  it('Function getLatestNotification', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});