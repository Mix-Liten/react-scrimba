import React from 'react'
import Trollface from '../../assets/Trollface.png'

const Header = () => {
  return (
    <div className="meme_logo">
      <img 
        src={Trollface} 
        alt="Trollface"
      />
      <p>Meme Generator</p>
    </div>
  )
}

export default Header
