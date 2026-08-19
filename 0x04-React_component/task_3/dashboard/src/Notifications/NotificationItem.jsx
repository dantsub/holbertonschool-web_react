import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  render () {
    const { type, value, html, markAsRead, id } = this.props;
    return(
      <li data-notification-type={ type } onClick={() => markAsRead(id) } {...(html && html.__html ? { dangerouslySetInnerHTML: html } : {})}>
        { html && html.__html ? null : value }
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
}

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: undefined,
  markAsRead: () => {},
}

export default NotificationItem;
