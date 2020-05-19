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
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/gatsby-theme-carbon',
          subDirectory: '/packages/example',
        },
      },
    },
  ],
};
