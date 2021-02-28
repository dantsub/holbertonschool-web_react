import React, { Component } from 'react';
/* Components */
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
/* Proptypes */
import { bool, func } from 'prop-types';
/* Styles */
import './App.css';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
];

class App extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleLogOut);
  }

  handleLogOut = (event) => {
    if (event.keyCode === 72 && event.ctrlkey) {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render (){
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          {/* Header */}
          <Header />
          {/* Body */}
          {this.props.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          {/* Footer */}
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: bool,
  logOut: func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
