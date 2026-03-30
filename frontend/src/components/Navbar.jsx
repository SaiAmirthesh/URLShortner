import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
        <div className='logo'>
            <img src='https://cdn-icons-png.flaticon.com/512/3064/3064112.png' alt='logo' style={{filter:'grayscale(1) invert(1)'}}/>
            <div className='title'>ShortSearch</div>
        </div>
        <div className='top-bar'>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <a href='#Features'>Features</a>
        </div>
        <div className='start'>
            <button className='get-started' onClick={() => navigate('/dashboard')}>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar 
