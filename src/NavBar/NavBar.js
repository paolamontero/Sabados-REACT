import React from 'react'
import {Link} from 'react-router-dom'

import './NavBar.css'


export default function Navbar() {
    return (
        <nav className="NavBar">
            <div className="link-container">
                <Link to="/" className="link">Home</Link>
            </div>
            <div className="link-container">
                <Link to="./productos" className="link">Productos</Link>
            </div>
            <div className="link-container">
                <Link to="./servicios" className="link">Servicios</Link>
            </div>
            <div className="link-container">
                <Link to="./contacto" className="link">Contacto</Link>
            </div>
        </nav>
    )
}
