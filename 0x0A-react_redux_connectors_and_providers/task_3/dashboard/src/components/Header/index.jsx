import logo from '@/assets/logo.jpg';
import { useAuth } from '@/contexts/AppContext.jsx';

import './Header.css';


function Header() {
  const { user, logOut } = useAuth();
  return(
    <div className="App-header">
      <img src={logo} alt="logo" />
      <h1>
        School dashboard
      </h1>
      { user.isLoggedIn ?
        <p id="logoutSection">Welcome {user.email} (<span onClick={logOut}>logout</span>)</p>
        :
        <></>
      }
    </div>
  );
}

export default Header;
