import React, { useState } from 'react'

const UpdateModal = ({ currentUrl, updateUrl, closeModal }) => {
  const [newUrl, setNewUrl] = useState(currentUrl.url || '');

  const handleSubmit = () => {
    if (newUrl.trim()) {
      updateUrl(newUrl);
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>UPDATE LINK</h2>
        <p style={{color:'var(--text-muted)', marginBottom:'2rem', fontSize:'0.8rem', letterSpacing:'1px', textTransform:'uppercase'}}>Update destination for <strong>/{currentUrl.shortCode}</strong></p>
        <input 
          type="text" 
          placeholder="New destination URL"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
          autoFocus
        />
        <div className="modal-actions">
          <button className="btn-cancel" onClick={closeModal}>Cancel</button>
          <button className="btn-confirm" onClick={handleSubmit}>Update Link</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateModal
