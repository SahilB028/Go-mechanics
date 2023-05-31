import React from 'react'
import logo from './logo.png'
import { Link, NavLink } from 'react-router-dom'


export default function () {
  return (
    <>
    <div className="main">
    <div className="navbar">
       
    <img src=
    {logo}/>
        
 <ul>     
    
 
 <Link to ="/"><li className="more">Home</li></Link>
<a href="/blog"><li className="more">Blog</li></a>
<Link to="/spare"><li className="more">Spare</li></Link>
<Link to ="/login"><li className="more">Login</li></Link>
</ul>
</div>
</div>
</>
  )
}
