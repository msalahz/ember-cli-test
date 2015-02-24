// This simple auth custom authenticator include the functionality required to authenticate/restore/invalidate user session.
// Module import for Ember
import Ember from 'ember';
// Module import for simple auth authenticator base
import Base from 'simple-auth/authenticators/base';
// Module export for extended simple auth custom authenticator
export default Base.extend({
  // Restores the session from a set of properties.
  // This method is invoked by the session either after the application starts up and session data was restored from the store
  // or when properties in the store have changed due to external events (e.g. in another tab)
  // and the new set of properties needs to be re-checked for whether it still constitutes an authenticated session.
  restore: function (data) {
    // This method returns a promise.
    return new Ember.RSVP.Promise(function (resolve, reject) {
      // validate token
      if (!_.isEmpty(data.token)) {
        // A resolving promise will result in the session being authenticated.
        resolve(data);
      } else {
        // A rejecting promise indicates that authentication failed and the session will remain unchanged.
        reject();
      }
    });
  },
  // Authenticates the session with the specified options
  authenticate: function (data) {
    // This method returns a promise.
    return new Ember.RSVP.Promise(function (resolve, reject) {
      // validate token
      if (!_.isEmpty(data.token)) { console.log('authenticate: ', new Date());
        // A resolving promise will result in the session being authenticated.
        resolve(data);
      } else {
        // A rejecting promise indicates that authentication failed and the session will remain unchanged.
        reject();
      }
    });
  },
  // This callback is invoked when the session is invalidated
  invalidate: function () {
    // This method returns a promise.
    return new Ember.RSVP.Promise(function (resolve) { console.log('invalidate: ', new Date());
      // A resolving promise will result in the session being invalidated
      resolve();
    });
  }
});
