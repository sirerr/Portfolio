import React from "react"

function Project(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </div>
  )
}

export default Project
