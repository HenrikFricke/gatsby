require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-github",
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        },
        queries: [
          `{
            viewer {
              repositories(first:10, isFork:false, privacy:PUBLIC, orderBy:{field:CREATED_AT, direction:DESC}) {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }`
        ]
      }
    }
  ]
};
