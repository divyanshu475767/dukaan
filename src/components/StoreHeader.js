import React from 'react';
import './StoreHeader.css';

const StoreHeader = () => {
  return (
    <div className='store-header'>
    <h1>The Generics</h1>
    <button className="latest-album">Get our Latest Album</button>
    <button className="play-btn">►</button>
    </div>
  )
}

export default StoreHeader
