const environment = {
  development: {
    isProduction: false,
    assetsPath: `http://${process.env.HOST || 'localhost'}:${+process.env.PORT + 1 || 3001}/dist/`
  },
  production: {
    isProduction: true,
    assetsPath: '/dist/'
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign(
  {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT,
    apiHost: process.env.APIHOST || 'localhost',
    apiPort: process.env.APIPORT,
    app: {
      title: 'Service Course',
      description: 'Use the Strava API data to stay on top of your bike maintenance.',
      head: {
        titleTemplate: 'Service Course: %s',
        meta: [
          { name: 'description', content: 'Use the Strava API data to stay on top of your bike maintenance.' },
          { charset: 'utf-8' },
          { property: 'og:site_name', content: 'Service Course' },
          { property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:title', content: 'Service Course' },
          { property: 'og:description', content: 'Use the Strava API data to stay on top of your bike maintenance.' },
          { property: 'og:card', content: 'summary' },
          { property: 'og:site', content: '@colinduwe' },
          { property: 'og:creator', content: '@colinduwe' },
          { property: 'og:image:width', content: '200' },
          { property: 'og:image:height', content: '200' }
        ]
      }
    }
  },
  environment
);
