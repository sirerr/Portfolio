import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"

function Project({ data: { mdx } }) {
  return (
    <div>
      <h1>{mdx.frontmatter.title}</h1>
      <h2>It will take you {mdx.timeToRead} minutes to read this!</h2>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </div>
  )
}
export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      timeToRead
      code {
        body
      }
    }
  }
`
export default Project
