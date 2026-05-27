import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

function Notifications() {
  const buttonClick = () => {
    console.log('Close button has been clicked');
  }

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul style={{position: 'relative'}}>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
      <button onClick={buttonClick} aria-label="Close" style={buttonStyle}>
        <img alt="close icon" src={close_icon} style={imageStyle}/>
      </button>
    </div>
  );
}

const buttonStyle = {
  position: 'fixed',
  top: '1em',
  right: '1em',
  background: 'transparent',
  border: 'none',
  zIndex: 1,
  cursor: 'pointer',
}

const imageStyle = {
  width: '20px',
  height: '20px',
}

export default Notifications;
