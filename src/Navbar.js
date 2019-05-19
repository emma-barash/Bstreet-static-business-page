import React from 'react';

const Navbar = () =>{
    const style = {
        color: "red",
        transform: [{ rotate: '90deg'}]
    }

    return(
        <nav className="navigation" style={style}>
            <div className="rotate"><a href="#" className="inNav">home</a></div>
            <div className="rotate"><a href="#" className="inNav">custom order</a></div>
            <div className="rotate"><a href="#" className="inNav">about us</a></div>
            <div className="rotate"><a href="#" className="inNav">blog</a></div>
            <div className="rotate"><a href="#" className="inNav">f. a. q.</a></div>
            <div className="rotate"><a href="#" className="inNav">shop</a></div>
            <div className="rotate"><a href="#" className="inNav">gallery</a></div>
        </nav>
    )
}

export default Navbar;