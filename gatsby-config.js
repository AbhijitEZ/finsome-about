require('dotenv').config();

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`,
      },
    },
    'gatsby-plugin-postcss',
  ],
  pathPrefix: `/about-us`,
};
