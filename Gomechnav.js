import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

export default function Gomechnav() {
  return (
    <>
    <div className='gomechnav'>
       
            <ul>
         <NavLink to='/Blog'><li><i className="bi bi-facebook"/></li></NavLink> 
        </ul>
            </div></>
  )
}
