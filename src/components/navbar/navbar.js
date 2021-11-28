import React from 'react'
import "./navbar.scss"

import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const Navbar = (props) => {
    let navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">My Awesome Project</span>
                <a onClick={() => navigate("/login")}><FiLogOut /></a>
            </div>
        </nav>
    )
}


export default Navbar

