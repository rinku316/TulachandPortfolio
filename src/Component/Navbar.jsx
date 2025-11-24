import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logoT.png'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/projext"><img src={logo} alt="Logo" /></Link>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/projext">Projects</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </div>
  )
}
