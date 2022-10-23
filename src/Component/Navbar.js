import React from "react";

const Navbar = ()=> {
    return (
        <div className="navbar-component">
            <div className="nav-logo-container">
                <img src="./images/netflix.png" alt="netflix" className="netflix-logo" />
            </div>
            <div className="nav-btn-container">
                <button className="signup-btn">Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar