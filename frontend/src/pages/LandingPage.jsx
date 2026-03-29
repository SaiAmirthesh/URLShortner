import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Landing/Hero'
import Contacts from '../components/Landing/Contacts'
import Features from '../components/Landing/Features'

const LandingPage = ({gotoUrl}) => {
  return (
    <>
        <Navbar gotoUrl = {gotoUrl} />
        <section id='Home' className='dark-section'>
            <Hero gotoUrl={gotoUrl}/>
        </section>
        <section id="Features" className='light-section'>
            <h1 style={{textAlign:"center", marginTop:"60px"}}>Features</h1>
            <br />
            <Features/>
        </section>
        <section id="Contacts" className='dark-section'>
            <div style={{marginTop:'4rem', color:'var(--text-muted)', fontSize:'0.9rem'}}>
                &copy; 2026 URLShortner Pro. All Rights Reserved.
            </div>
        </section>
    </>
  )
}

export default LandingPage 
