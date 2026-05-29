'use client';
import './Notifications.css';
import close_icon from '@/assets/close-icon.png';
import { getLatestNotification } from '@/utils';
import NotificationItem from './NotificationItem';
import { notifications } from './notifications';
import { useState } from 'react';

function Notifications() {
  const [isVisible, setIsVisible] = useState(true);

  const displayNotifications = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className={`Notifications ${isVisible ? 'visible' : ''}`}>
      {!isVisible && (
        <p onClick={displayNotifications}>Your notifications</p>
      )}
      {isVisible && (
        <div>
          <p>Here is the list of notifications</p>
          <ul>
            {notifications.map((notification) => {
              if (notification.isDanger) {
                return (
                  <NotificationItem key={notification.id} type={notification.type} dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
                );
              } else {
                return (<NotificationItem
                  key={notification.id}
                  type={notification.type}
                >
                  {notification.message}
                </NotificationItem>)
              }
            })}
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
  width: '10px',
  height: '10px',
}

export default Notifications;