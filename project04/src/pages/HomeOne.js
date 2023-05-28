import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeOne() {
  return (
    <div><h1>home page</h1>
    <Link to="/About">This link go to about page</Link>
    <br></br>
    <Link to="/ContactUs">This link go to contact us page</Link>
    </div>
    
  )
}
