import React from 'react'
import PropTypes from 'prop-types'; // ES6
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <li
        data-notification-type={type}
        onClick={() => { markAsRead(id) }}
        className={css(type === 'urgent' ? style.urgent : style.default, style.mediumItemNotification)}
        {...(html && html.__html ? { dangerouslySetInnerHTML: html } : {})}
      >
        {html && html.__html ? null : value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func
}

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: undefined,
  markAsRead: () => void(0)
}

const style = StyleSheet.create({
  default: {
    color: '#0000ff',
  },
  urgent: {
    color: '#ff0000',
  },
  mediumItemNotification: {
    '@media (max-width: 900px)': {
      borderBottom: '1px solid black',
      padding: '10px 8px'
    }
  }
});

export default NotificationItem;