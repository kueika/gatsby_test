import React from "react"
import { Link } from "gatsby"

const linkPages = ({ data }) => (
  <React.Fragment>
    <div>
      <a href="https://github.com/kueika">kueika's Github Link</a>
    </div>
    <Link to="/">Back to home</Link>
  </React.Fragment>
)

export default linkPages
