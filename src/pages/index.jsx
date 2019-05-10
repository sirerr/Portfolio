import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import "./index.css";

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      thingsYaml {
        things
      }
      allMdx {
        edges {
          node {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `);
  const things = data.thingsYaml.things;
  const projects = data.allMdx.edges.map(edge => edge.node);
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>What Up!</h1>
      <h2>My name is Leonard.</h2>
      <div>
        <div className="nouns">
          <h3>I am:</h3>
          <ul>
            {things.map(thing => {
              return <li key={thing}>{thing}</li>;
            })}
          </ul>
        </div>
        <div className="links">
          <h3>These are my projects</h3>
          <ul>
            {projects.map(project => {
              return (
                <li key={project.frontmatter.title}>
                  <Link to={project.frontmatter.path}>
                    {project.frontmatter.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
