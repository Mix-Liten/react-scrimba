import React from 'react'
import Trollface from '../assets/Trollface.png'

const Header = () => {
  return (
    <header>
      <img 
        src={Trollface} 
        alt="Trollface"
      />
      <p>Meme Generator</p>
    </header>
  )
}

export default Header
