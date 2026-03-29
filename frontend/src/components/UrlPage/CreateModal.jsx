import React, { useState } from 'react'

const CreateModal = ({ addUrl, closeModal }) => {
  const [longUrl, setLongUrl] = useState('');

  const handleSubmit = () => {
    if (longUrl.trim()) {
      addUrl(longUrl);
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>CREATE NEW LINK</h2>
        <p style={{color:'var(--text-muted)', marginBottom:'2rem', fontSize:'0.8rem', letterSpacing:'1px', textTransform:'uppercase'}}>Enter the destination URL.</p>
        <input 
          type="text" 
          placeholder="HTTPS://EXAMPLE.COM/DESTINATION"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          autoFocus
        />
        <div className="modal-actions">
          <button className="btn-cancel" onClick={closeModal}>Cancel</button>
          <button className="btn-confirm" onClick={handleSubmit}>Create Link</button>
        </div>
      </div>
    </div>
  )
}

export default CreateModal
