import React from "react";
import './Navbar.css'

function Navbar(props){
    return (
    <nav className="Navbar">
        <button 
            onClick={() => props.hideDetails()}> 
            Home 
        </button>
    </nav>
    )
}

export default Navbar