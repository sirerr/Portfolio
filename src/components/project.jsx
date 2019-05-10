import React from "react";
import { MDXRenderer } from "gatsby-mdx";
import { Link } from "gatsby";
import SEO from "./seo";

function Project(props) {
  return (
    <div>
      <SEO title={props.data.mdx.frontmatter.title} />
      <p>
        <Link to="/">Home</Link>
      </p>
      <h1>{props.data.mdx.frontmatter.title}</h1>
      <MDXRenderer>{props.data.mdx.code.body}</MDXRenderer>
    </div>
  );
}

export const query = graphql`
  query ProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`;

export default Project;
