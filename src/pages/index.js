import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage() {
  const foobarprops = {
    name: "Leonard",
    lastName: "Wedderburn",
    timeOfDay: "evening",
  }
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      My first Gatsby site!
    </Layout>
  )
}

export default IndexPage
