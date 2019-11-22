import React from 'react'
import './style.css'
import { Link, NavLink } from 'react-router-dom'

export default function header() {
  return (
    <header className="header-fixed">
      <div className="header-limiter">
        <h1>
          <Link to="/">Company<span>logo</span></Link>
        </h1>
        <nav>
          <NavLink to="/todo" activeClassName="selected">TodoList</NavLink>
          <NavLink to="/form" activeClassName="selected">Form</NavLink>
          <NavLink to="/meme" activeClassName="selected">MemeGenerator</NavLink>
        </nav>
      </div>
    </header>
  )
}
