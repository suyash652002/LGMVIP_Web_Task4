import React from 'react'
import './Navbar.css'

export default function Navbar({ getData }) {

    return (
        <nav className="navbar">
        
                <span className="logo">Let's Grow More</span>
                <div className='btn'>
                <button onClick={getData}>Get Users</button>
                </div>
            
        </nav>
    )
}