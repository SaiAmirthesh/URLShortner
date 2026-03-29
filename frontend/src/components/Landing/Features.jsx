import React from 'react'

const Features = () => {
  const features = [
    {
      title: "Fast Redirects",
      description: "Optimized server-side redirection that takes milliseconds.",
      label: "SPEED"
    },
    {
      title: "Live Stats",
      description: "Real-time tracking of click analytics for every URL you create.",
      label: "STATS"
    },
    {
      title: "Secure Links",
      description: "Advanced protection against malicious redirects and scripts.",
      label: "SECURE"
    },
    {
      title: "Management",
      description: "Easy-to-use dashboard for tracking and updating your links.",
      label: "CONTROL"
    }
  ]

  return (
    <div className='features-grid'>
      {features.map((f, index) => (
        <div key={index} className='feature-card'>
          <div className='label' style={{fontSize:'0.6rem', letterSpacing:'1px', marginBottom:'1rem', color:'var(--text-muted)'}}>{f.label}</div>
          <h3 style={{marginBottom:'1rem', textTransform:'uppercase', fontWeight:'800'}}>{f.title}</h3>
          <p style={{color:'var(--text-muted)', fontSize:'0.9rem'}}>{f.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Features
