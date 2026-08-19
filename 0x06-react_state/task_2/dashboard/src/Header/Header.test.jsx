import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';
import AppContext, { user, logOut } from '../App/AppContext';

describe('Test Header.js', () => {
  it('Header without crashing', () => {
    render(<AppContext.Provider value={{ user, logOut }}><Header /></AppContext.Provider>);
  });

  it('renders 1 img and 1 h1', () => {
    const { container } = render(<AppContext.Provider value={{ user, logOut }}><Header /></AppContext.Provider>);
    expect(container.querySelectorAll('img')).toHaveLength(1);
    expect(container.querySelectorAll('h1')).toHaveLength(1);
  });

  it('logoutSection is not created when the user is logged out within the context', () => {
    const { container } = render(<AppContext.Provider value={{ user, logOut }}><Header /></AppContext.Provider>);
    expect(container.querySelector('#logoutSection')).not.toBeInTheDocument();
  });

  it('logoutSection is created when the user is logged in within the context', () => {
    const { container } = render(
      <AppContext.Provider value={{ user: { email: 'test@test.com', password: 'test', isLoggedIn: true }, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(container.querySelector('#logoutSection')).toHaveTextContent('Welcome test@test.com');
  });

  it('clicking on the logout link calls the logOut function', () => {
    const spy = vi.fn();
    const { container } = render(
      <AppContext.Provider value={{ user: { email: 'test@test.com', password: 'test', isLoggedIn: true }, logOut: spy }}>
        <Header />
      </AppContext.Provider>
    );
    fireEvent.click(container.querySelector('#logoutSection span'));
    expect(spy).toHaveBeenCalled();
  });
});