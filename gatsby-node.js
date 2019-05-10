const path = require("path")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = createPages

async function createPages({ graphql, actions }) {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // this is some boilerlate to handle errors
  if (result.errors) {
    console.error(result.errors)
    throw result.errors
  }
  // We'll call `createPage` for each result
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/project.js`),
      // We can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}
