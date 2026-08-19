import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import AppContext, { user, logOut } from '../App/AppContext';

describe('Test Footer.js', () => {
  it('Footer without crashing', () => {
    render(<AppContext.Provider value={{ user, logOut }}><Footer /></AppContext.Provider>);
  });

  it('renders a footer element with Copyright text', () => {
    const { container } = render(<AppContext.Provider value={{ user, logOut }}><Footer /></AppContext.Provider>);
    expect(container.querySelector('footer')).toHaveTextContent(/Copyright/);
  });

  it('the Contact us link is not displayed when the user is logged out within the context', () => {
    const { container } = render(<AppContext.Provider value={{ user, logOut }}><Footer /></AppContext.Provider>);
    expect(container.querySelector('#conctacUs')).not.toBeInTheDocument();
  });

  it('the Contact us link is displayed when the user is logged in within the context', () => {
    const { container } = render(
      <AppContext.Provider value={{ user: { email: 'test@test.com', password: 'test', isLoggedIn: true }, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(container.querySelector('#conctacUs')).toHaveTextContent('Contact us');
  });
});