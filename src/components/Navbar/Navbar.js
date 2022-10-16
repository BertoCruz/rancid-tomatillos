import React from "react";
import './Navbar.css'

function Navbar(props){
    return (
        <header>
            <h1>Rancid Tomatillos</h1>
            <nav className="Navbar">
                <button 
                    onClick={() => props.hideDetails()}> 
                    Home 
                </button>
            </nav>
        </header>
    )
}

export default Navbar