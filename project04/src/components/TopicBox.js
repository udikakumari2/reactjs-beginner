import React from 'react'
import './topicBox.css'

export default function TopicBox(props) {
  return (
    <div>
        
        <div className="topicBox">
            <span class="text">This is topic {props.box}
            and color is {props.bcolor}
            
            </span>
            <h1>{props.children}</h1>
        </div>
    </div>
  )
}
