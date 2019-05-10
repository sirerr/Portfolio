const path = require("path")

exports.createPages = createProjectPages;

async function createProjectPages({ graphql, actions }) {
  const projectComponent = path.resolve(`src/components/project.jsx`)
  const result = await graphql(`
    query {
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
  `);
  if (result.errors) {
    console.error('Error fetching data for project pages');
    throw result.errors;
  }
  for ( const { node } of result.data.allMdx.edges ) {
    actions.createPage({
      path: node.frontmatter.path,
      id: node.id,
      component: projectComponent,
      context: {
        id: node.id,
      }
    });
  }
}
