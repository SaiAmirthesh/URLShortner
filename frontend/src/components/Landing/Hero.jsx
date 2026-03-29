import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className='hero-content'>
      <h1>Shorten Your Links <br/> Expand Your Reach</h1>
      <p>Powerful, fast, and secure URL shortening service designed for modern links. Track your analytics with ease and manage your digital presence.</p>
      <div className='start'>
        <button className='get-started' onClick={() => navigate('/dashboard')} style={{fontSize:'1.2rem', padding:'1.2rem 3rem'}}>Get Started</button>
      </div>
    </div>
  )
}

export default Hero
