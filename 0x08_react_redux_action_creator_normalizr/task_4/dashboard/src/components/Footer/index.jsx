import { getFullYear, getFooterCopy } from '@/utils';
import { useAuth } from '@/contexts/AppContext.jsx';
import './Footer.css';


function Footer() {
  const { user } = useAuth();
  return(
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      { user.isLoggedIn && <p id="contactUs"><a>Contact us</a></p> }
    </div>
  );
}

export default Footer;
