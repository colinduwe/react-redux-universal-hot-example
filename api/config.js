const ONE_DAY = 60 * 60 * 24 * 1000;

module.exports = {
  auth: {
    secret: 'super secret',
    cookie: {
      enabled: true,
      httpOnly: false,
      maxAge: ONE_DAY,
      secure: process.env.NODE_ENV === 'production'
    },
    facebook: {
      path: '/auth/facebook',
      clientID: '293926717366312',
      clientSecret: 'ad56bb653d727b57b309f4be83434101',
      permissions: {
        authType: 'rerequest'
      },
      scope: ['public_profile', 'email'],
      profileFields: ['id', 'displayName', 'photos', 'email', 'first_name', 'last_name', 'age_range'],
      accessTokenField: 'accessToken'
    },
    strava: {
      path: '/auth/strava',
      clientID: '4033',
      clientSecret: '198ce16bfad7be702299a212742e32e1a30edd09',
      successRedirect: 'http://localhost:3000/login-success',
      scope: ['view_private,write']
    }
  }
};
