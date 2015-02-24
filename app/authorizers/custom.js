// This simple auth custom authorizer include the functionality required for injecting API token as an authorization header in all HTTP requests.
import Ember from 'ember';
// Module import for simple auth authorizer base
import Base from 'simple-auth/authorizers/base';
// Module export for extended simple auth custom authorizer
export default Base.extend({
  // Authorizes an XHR request by adding some sort of secret information that allows the server to identify the user making the request
  authorize: function (jqXHR) {
    // validate current session
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(this.get('session.token'))) {
      // Authorizing XHR request by adding Authorization token to request headers
      jqXHR.setRequestHeader('X-AUTH-TOKEN', this.get('session.token'));
    }
  }
});
