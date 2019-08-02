import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import "./index.scss"
import profilePic from './profile.jpg';

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              path
              image{
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allMdx.edges.map(edge => edge.node)
  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div>
        <div className="intro">
          <div className="content">
            <div className="intro-row-1">
              <img src={profilePic} alt="Profile picture"/>
              <div className="column">
                <h1>Leonard Wedderburn</h1>
                <h2 className="tagline">
                  Designer. Developer. Creative.
                </h2>
              </div>
            </div>
          </div>
        </div>
          <a href="Leonard Wedderburn-Resume.pdf">Resume</a>
        <div className="links">
          {projects.map(project => {
            return (
              <div key={project.frontmatter.title}>
                <Link to={project.frontmatter.path}>
                  <img src={project.frontmatter.image.publicURL}>
                  </img>
                  <span>
                    {project.frontmatter.title}
                  </span>
                </Link>
              </div>
            )
          })}

        </div>
      </div>
    </>
  )
}

export default IndexPage
