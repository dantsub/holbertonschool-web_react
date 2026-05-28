'use client';
import './Notifications.css';
import close_icon from '@/assets/close-icon.png';
import { getLatestNotification } from '@/utils';
import NotificationItem from './NotificationItem';
import { useState } from 'react';

function Notifications() {
  const [isVisible, setIsVisible] = useState(true);

  const displayNotifications = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className={`Notifications ${isVisible ? 'visible' : ''}`}>
      <p onClick={displayNotifications}>Here is the list of notifications</p>
      {isVisible && (
        <div>
          <ul>
            <NotificationItem type="default">
              New course available
            </NotificationItem>
            <NotificationItem type="urgent">
              New resume available
            </NotificationItem>
            <NotificationItem type="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}>
            </NotificationItem>
          </ul>
          <button onClick={displayNotifications} aria-label="Close" style={buttonStyle}>
            <img alt="close icon" src={close_icon} style={imageStyle} />
          </button>
        </div>)
      }
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