import React from "react"
import { Link, graphql } from "gatsby"

const aboutPages = ({ data }) => (
  <React.Fragment>
    <a href="https://github.com/kueika">kueika's Github Link</a>
    <Link to="/">Back to home</Link>
  </React.Fragment>
)

export default aboutPages