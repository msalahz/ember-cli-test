/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-cli-test',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['simple-auth'] = {
    authenticationRoute: 'login', //The route to transition to for authentication.
    routeAfterAuthentication: 'authorized', //The route to transition to after successful authentication.
    routeIfAlreadyAuthenticated: 'authorized', //The route to transition to if a route that implements UnauthenticatedRouteMixin is accessed when the session is authenticated.
    sessionPropertyName: 'session', //The name of the property that the session is injected with into routes and controllers.
    authorizer: 'authorizer:custom',//The authorizer factory to use as it is registered with Ember's container
    authenticate: 'authenticator:custom',//The authenticator factory to use as it is registered with Ember's container
    session: 'simple-auth-session:main', //The session factory to use as it is registered with Ember's container
    store: 'simple-auth-session-store:cookie',//The store factory to use as it is registered with Ember's container
    key: 'ember_simple_auth:session',//The key the store stores the data in.
    crossOriginWhitelist: ['*'] //enable authorization for whitelist external origins
  };

  ENV['simple-auth-cookie-store'] = {
    cookieName: 'ember_simple_auth:session',//The name of the cookie the store stores its data in.
    cookieExpirationTime: 300, // 5 min, The expiration time in seconds to use for the cookie. A value of null will make the cookie a session cookie that expires when the browser is closed.
    rememberCookieExpirationTime: 1209600 // 1209600 sec = 14 day
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
