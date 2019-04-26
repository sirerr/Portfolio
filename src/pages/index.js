import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import "./index.css"

function IndexPage() {
  const data = useStaticQuery(
    graphql`
      query {
        thingsYaml {
          things
        }
      }
    `
  )
  const things = data.thingsYaml.things
  // const liElements = []
  // for (const thing of things) {
  //   liElements.push(<li>{thing}</li>)
  // }
  // const liElements = things.map(thing => {
  //   return <li>{thing}</li>
  // });
  // const numbers = [1,2,3]
  // const nextNumbers = numbers.map(num => { return num*2 }); // [2,4,6]
  // const nextNextNumbers = numbers.map(function numMapper(num) {
  //   return num*2;
  // });
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hello!</h1>
      <h2>My name is Leonard.</h2>
      <h3>I am:</h3>
      <ul>
        {things.map(thing => {
          return <li>{thing}</li>
        })}
      </ul>
    </Layout>
  )
}

export default IndexPage
