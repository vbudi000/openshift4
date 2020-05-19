module.exports = {
  siteMetadata: {
    title: 'Learning OpenShift 4.x',
    description: 'Learning OpenShift 4 - deep dive into OpenShift 4 functions',
    keywords: 'openshift,kubernetes,application',
  },
  pathPrefix: `/openshift4`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Learning OpenShift 4.x',
        short_name: 'OpenShift4',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'openshift4',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl: 'https://github.com/vbudi000/openshift4',
          subDirectory: '/',
        },
      },
    },
  ],
};
