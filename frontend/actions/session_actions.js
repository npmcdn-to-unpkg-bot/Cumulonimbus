const Dispatcher = require('../dispatcher/dispatcher');
const SessionApiUtils = require('../utils/session_api_utils');
const SessionConstants = require('../constants/session_constants.js');
const ErrorActions = require('./error_actions');



const SessionActions = {
  login(userData) {
    SessionApiUtils.login(userData, this.receiveUser, ErrorActions.setErrors);
  },
  facebookLogin(){
    SessionApiUtils.facebookLogin(this.receiveUser);
  },
  googleLogin(){
    SessionApiUtils.googleLogin(this.receiveUser);
  },

  receiveUser(userData) {
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      userdata: userData
    });
  },

  logout() {
    SessionApiUtils.logout(this.removeCurrentUser, ErrorActions.setErrors);
  },

  removeCurrentUser() {
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
  }
};


module.exports = SessionActions;
