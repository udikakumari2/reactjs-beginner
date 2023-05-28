import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'

export default function Home() {
  const varone="This is first variable "
      const vartwo="This is second variable"
      const a=10
      const b=20
      const c=a+b
  return (
    <div>
      
      <h1>vartiable calling <br></br>{varone} <br></br>{vartwo}</h1>
      <br></br>
      <h1> {c} {"is sum of two numbers"} {alert("hello")}
      {[10,20,30]}</h1>
      <h1>This is home page</h1>
    <TopicBox box="box1" bcolor="red">
      <span>This is description</span>
    </TopicBox>
    <TopicBox box="box2" bcolor="blue">
      <button>This is the button</button> </TopicBox>
    <TopicBox box="box3" bcolor="green"/>

    <h1>This is content page</h1>
    <Content/>
    </div>

  )
}
