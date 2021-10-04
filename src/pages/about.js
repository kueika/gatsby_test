import React from "react"
import { Link, graphql } from "gatsby"

const aboutPages = ({ data }) => (
  <React.Fragment>
    <h1>{data.site.siteMetadata.title}</h1>
    <h2>{data.site.siteMetadata.description}</h2>
    <Link to="/">Back to home</Link>
  </React.Fragment>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`

export default aboutPages
