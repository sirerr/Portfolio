import React from "react"
import './image.css'

function Image(props) {

  return <img className="image" src={props.src} />
}

export default Image
